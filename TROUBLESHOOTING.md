# Troubleshooting Guide

Common issues and their solutions for Rent-a-Rover.

## 🔧 Backend Issues

### MongoDB Connection Timeout
**Error:** `Operation users.findOne() buffering timed out after 10000ms`

**Solutions:**
1. **Whitelist Your IP in MongoDB Atlas**
   - Go to MongoDB Atlas → Network Access
   - Click "Add IP Address"
   - Add current IP or allow from anywhere (0.0.0.0/0) for development

2. **Check MongoDB URI**
   - Verify MONGO_URI in backend/.env is correct
   - Ensure password doesn't have special characters (or URL encode them)

3. **Verify Database User**
   - Check user exists in MongoDB Atlas → Database Access
   - Verify credentials are correct

### JWT Authentication Errors
**Error:** `500 Internal Server Error on /api/auth/signin`

**Solutions:**
1. **Add Missing Environment Variables**
   ```bash
   # In backend/.env
   ACCESS_TOKEN=your_secret_key_here
   REFRESH_TOKEN=your_refresh_secret_here
   ```

2. **Generate Strong Secrets**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

### CORS Errors
**Error:** `Access to fetch blocked by CORS policy`

**Solutions:**
1. **Add Frontend URL to allowedOrigins**
   ```javascript
   // backend/server.js
   const allowedOrigins = [
     'http://localhost:5173',
     'http://localhost:5174',
     'https://your-frontend.vercel.app'
   ];
   ```

## 🎨 Frontend Issues

### API Connection Errors
**Error:** `Failed to fetch` or `Network Error`

**Solutions:**
1. **Check Backend URL in client/.env**
   ```bash
   VITE_PRODUCTION_BACKEND_URL=http://localhost:3000
   ```

2. **Ensure Backend is Running**
   ```bash
   cd backend
   npm run dev
   ```

### Environment Variables Not Loading
**Solution:**
- Restart Vite dev server after changing .env
- Ensure variable starts with `VITE_`
- Access via `import.meta.env.VITE_VARIABLE_NAME`

### React Router Warnings
**Warning:** `React Router Future Flag Warning`

**Solution:** (Optional, non-critical)
```javascript
// Add to router configuration
future: {
  v7_startTransition: true,
  v7_relativeSplatPath: true
}
```

## 📦 Installation Issues

### Node Modules Issues
**Error:** Various dependency errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# For client
cd client
rm -rf node_modules package-lock.json
npm install

# For backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
**Error:** `Port 3000 is already in use`

**Solutions:**
1. **Kill Process on Port**
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F

   # Mac/Linux
   lsof -ti:3000 | xargs kill -9
   ```

2. **Use Different Port**
   ```bash
   # In backend/.env
   PORT=3001
   ```

## 🔐 Authentication Issues

### Login Not Working
1. Check browser console for errors
2. Verify backend is running
3. Check MongoDB connection
4. Verify JWT secrets are set
5. Check CORS configuration

### Token Expired Errors
- Access tokens expire in 15 minutes
- Use refresh token endpoint to get new access token
- Re-login if refresh token expired (7 days)

## 💳 Payment Issues

### Razorpay Errors
- Verify RAZORPAY_KEY_ID and RAZORPAY_SECRET in backend/.env
- Check Razorpay account is active
- Verify test/live mode matches keys

## 📷 Image Upload Issues

### Cloudinary Upload Fails
- Check CLOUD_NAME, API_KEY, API_SECRET in backend/.env
- Verify Cloudinary account is active
- Check file size limits (usually 10MB)

## 🌐 Deployment Issues

### Build Failures
1. **Check Node Version**
   ```bash
   node --version  # Should be v16+
   ```

2. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

### Environment Variables Not Working in Production
- Set environment variables in hosting platform dashboard
- For Vite: Rebuild after adding variables
- For Node: Restart server after adding variables

## 📞 Getting Help

If you're still stuck:
1. Check the logs carefully
2. Search existing GitHub issues
3. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Environment details
   - Screenshots if applicable

---

💡 **Pro Tip:** Most issues are related to environment variables or MongoDB connection. Always check these first!
