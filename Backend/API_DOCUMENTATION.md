# Spotify Backend API Documentation

**Base URL:** `http://localhost:3000` (or your deployed server URL)  
**API Prefix:** All routes prefixed with `/api`

---

## Table of Contents
1. [Authentication](#authentication)
2. [Music](#music)
3. [Data Models](#data-models)
4. [Error Handling](#error-handling)
5. [Frontend Integration Guide](#frontend-integration-guide)

---

## Authentication

Base path: `/api/auth`

Authentication is cookie-based using JWT tokens. The server sets an HTTP-only cookie named `token` after successful login/registration. This cookie is automatically sent with subsequent requests.

### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "userName": "string (required, unique)",
  "email": "string (required, unique)",
  "password": "string (required)",
  "role": "string (optional) - 'user' or 'artist', defaults to 'user'"
}
```

**Response - 201 Created:**
```json
{
  "message": "User Created Sucessfully.",
  "user": {
    "id": "ObjectId",
    "userName": "string",
    "email": "string",
    "role": "user | artist"
  }
}
```

**Error Responses:**
- `409 Conflict` - Username or email already exists

---

### POST /api/auth/login
Authenticate an existing user.

**Request Body:**
```json
{
  "userName": "string (optional if email provided)",
  "email": "string (optional if username provided)",
  "password": "string (required)"
}
```

*Note: At least one of `userName` or `email` must be provided.*

**Response - 200 OK:**
```json
{
  "message": "Logged in Successfully.",
  "user": {
    "id": "ObjectId",
    "userName": "string",
    "email": "string",
    "role": "user | artist"
  }
}
```

**Error Responses:**
- `401 Unauthorized` - Invalid credentials (user not found or wrong password)

---

### POST /api/auth/logout
Logout the current user and clear the authentication cookie.

**Request:** No body required. Cookie is read automatically.

**Response - 200 OK:**
```json
{
  "message": "Logged out successfully."
}
```

**Error Responses:**
- `401 Unauthorized` - No token found in cookies

**Cookie Clearance:** The server clears the `token` cookie with these options:
- `httpOnly: true` - Prevents JavaScript access
- `sameSite: strict` - CSRF protection
- `secure: true` (production only) - HTTPS only

---

## Music

Base path: `/api/music`

### POST /api/music/create
Upload a new music track. **Artist role required.**

**Authentication:** Required (valid JWT cookie)
**Authorization:** Role must be `"artist"`

**Request Body:** `multipart/form-data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Track title |
| `file` | File | Yes | Audio file (any format supported by storage service) |

**Example (JavaScript Fetch):**
```javascript
const formData = new FormData();
formData.append('title', 'My Song');
formData.append('file', audioFileBlob, 'song.mp3');

fetch('/api/music/create', {
  method: 'POST',
  body: formData,
  credentials: 'include' // Important: sends cookies
});
```

**Response - 201 Created:**
```json
{
  "message": "Music Created Sucessfully.",
  "music": {
    "id": "ObjectId",
    "title": "string",
    "uri": "string (URL to the uploaded file)",
    "artist": "ObjectId (reference to User)"
  }
}
```

**Error Responses:**
- `400 Bad Request` - No file uploaded
- `401 Unauthorized` - Missing/invalid token
- `403 Forbidden` - User role is not "artist"

---

## Data Models

### User Schema

```javascript
{
  _id: ObjectId,           // Auto-generated MongoDB ID
  userName: String,        // Unique, required
  email: String,           // Unique, required
  password: String,        // Required (bcrypt hashed server-side)
  role: String             // Enum: ["user", "artist"], default: "user"
}
```

**Visual Schema:**

```
┌─────────────────────────────────────────┐
│                 USER                    │
├─────────────────────────────────────────┤
│ _id: ObjectId (PK)                      │
│ userName: String (Unique, Required)     │
│ email: String (Unique, Required)        │
│ password: String (Required, Hashed)     │
│ role: String ["user", "artist"]         │
│              Default: "user"            │
└─────────────────────────────────────────┘
```

**Relationships:**
- One User (as artist) → Many Music tracks

---

### Music Schema

```javascript
{
  _id: ObjectId,           // Auto-generated MongoDB ID
  uri: String,             // Required - URL to stored audio file
  title: String,           // Required - Track name
  artist: ObjectId         // Required - Reference to User (artist)
}
```

**Visual Schema:**

```
┌─────────────────────────────────────────┐
│                MUSIC                    │
├─────────────────────────────────────────┤
│ _id: ObjectId (PK)                      │
│ uri: String (Required)                  │
│     └─ URL to stored audio file         │
│ title: String (Required)                │
│ artist: ObjectId (FK → User._id)        │
│         Required                        │
└─────────────────────────────────────────┘
```

**Database Relationships:**
```
┌─────────────┐         ┌─────────────┐
│    USER     │         │    MUSIC    │
│  (artist)   │◄───────►│             │
│             │  1 : N  │             │
└─────────────┘         └─────────────┘
```

---

## Error Handling

All errors follow this standard format:

```json
{
  "message": "Human-readable error description"
}
```

### HTTP Status Codes

| Code | Meaning | When Occurs |
|------|---------|-------------|
| 200 | OK | Successful GET/POST operations |
| 201 | Created | Successful resource creation |
| 400 | Bad Request | Missing required fields, no file uploaded |
| 401 | Unauthorized | Missing/invalid JWT token |
| 403 | Forbidden | Valid token but insufficient permissions (e.g., role !== "artist") |
| 409 | Conflict | Resource already exists (duplicate username/email) |
| 500 | Server Error | Unexpected server errors |

---

## Frontend Integration Guide

### 1. Credentials Configuration
Always include `credentials: 'include'` in fetch requests to ensure cookies are sent:

```javascript
// Good
fetch('/api/music/create', {
  method: 'POST',
  credentials: 'include',
  body: formData
});

// With axios
axios.post('/api/music/create', formData, {
  withCredentials: true
});
```

### 2. Authentication Flow

```javascript
// Login
await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ email: 'user@example.com', password: 'secret' })
});
// Cookie is automatically set by browser

// Subsequent requests
await fetch('/api/music/create', {
  method: 'POST',
  credentials: 'include',
  body: formData
});
// Cookie sent automatically

// Logout
await fetch('/api/auth/logout', {
  method: 'POST',
  credentials: 'include'
});
// Cookie cleared by server
```

### 3. File Upload Pattern

```javascript
const uploadMusic = async (title, audioFile) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('file', audioFile); // File from <input type="file">

  const res = await fetch('/api/music/create', {
    method: 'POST',
    credentials: 'include',
    body: formData // No Content-Type header needed - browser sets it with boundary
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
};
```

### 4. Role-Based UI
Check the `role` from login/register response to conditionally show artist features:

```javascript
const user = await login(email, password);
if (user.role === 'artist') {
  // Show upload button, artist dashboard, etc.
}
```

### 5. CORS Considerations
If your frontend runs on a different domain/port:
- Ensure backend CORS settings allow credentials
- Frontend must use `credentials: 'include'`
- Backend must explicitly allow the frontend origin

---

## Environment Variables

The backend expects these environment variables:

```bash
JWT_SECRET=your-secret-key
NODE_ENV=development|production
```

In production, cookies are only sent over HTTPS (`secure: true`).

## SCHEMA MODELS

┌─────────────────────────────────────────┐
│                 USER                    │
├─────────────────────────────────────────┤
│ _id: ObjectId (PK)                      │
│ userName: String (Unique, Required)     │
│ email: String (Unique, Required)        │
│ password: String (Required, Hashed)     │
│ role: String ["user", "artist"]         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                MUSIC                    │
├─────────────────────────────────────────┤
│ _id: ObjectId (PK)                      │
│ uri: String (Required)                  │
│ title: String (Required)                │
│ artist: ObjectId (FK → User._id)        │
└─────────────────────────────────────────┘
---

*Last updated: May 2026*
