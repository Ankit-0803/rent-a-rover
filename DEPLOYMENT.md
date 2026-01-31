# Deployment Guide

## 🚀 Deploying Rent-a-Rover

This guide covers deploying the Rent-a-Rover application to production.

### Prerequisites
- MongoDB Atlas cluster (production tier)
- Vercel account (for frontend)
- Render/Railway account (for backend)
- Cloudinary account (for images)
- Razorpay account (for payments)

---

## Backend Deployment (Render/Railway)

### 1. Prepare Backend
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Add these in your hosting platform:
- `MONGO_URI` - Your production MongoDB connection string
- `JWT_SECRET` - Strong random secret
- `ACCESS_TOKEN` - Strong random token
- `REFRESH_TOKEN` - Strong random token
- `PORT` - (usually auto-assigned)
- `CLOUD_NAME`, `API_KEY`, `API_SECRET` - Cloudinary credentials
- `RAZORPAY_KEY_ID`, `RAZORPAY_SECRET` - Razorpay credentials
- `EMAIL_HOST`, `EMAIL_PASSWORD` - Email credentials

### 3. Update CORS Origins
In `backend/server.js`, add your production frontend URL:
```javascript
const allowedOrigins = [
  'https://your-frontend-domain.vercel.app',
  // ... other origins
];
```

### 4. Deploy
- Push code to GitHub
- Connect repository to Render/Railway
- Set build command: `npm install`
- Set start command: `node server.js`

---

## Frontend Deployment (Vercel)

### 1. Prepare Frontend
```bash
cd client
npm install
npm run build
```

### 2. Configure Environment Variables
Add in Vercel dashboard:
- `VITE_PRODUCTION_BACKEND_URL` - Your backend URL (e.g., `https://your-backend.onrender.com`)

### 3. Deploy
```bash
npm install -g vercel
vercel login
vercel --prod
```

Or connect GitHub repository to Vercel dashboard for automatic deployments.

---

## MongoDB Atlas Production Setup

1. **Create Production Cluster**
   - Use M2 or higher tier for production
   - Enable backups
   - Set up monitoring

2. **Security**
   - Whitelist only your backend server IP
   - Use strong database credentials
   - Enable encryption at rest

3. **Performance**
   - Create indexes on frequently queried fields
   - Monitor query performance
   - Set up connection pooling

---

## Post-Deployment Checklist

- [ ] Test all API endpoints
- [ ] Verify authentication flow
- [ ] Test payment integration
- [ ] Check image upload functionality
- [ ] Verify email notifications
- [ ] Test all user roles (User, Vendor, Admin)
- [ ] Check mobile responsiveness
- [ ] Set up error monitoring (Sentry)
- [ ] Configure CDN for static assets
- [ ] Set up SSL certificates

## Monitoring

### Recommended Tools
- **Backend**: Render/Railway built-in monitoring
- **Database**: MongoDB Atlas monitoring
- **Errors**: Sentry or LogRocket
- **Analytics**: Google Analytics
- **Uptime**: UptimeRobot

## Backup Strategy
- MongoDB: Automated daily backups via Atlas
- Code: GitHub repository
- Environment variables: Secure documentation

## Scaling Considerations
- Use MongoDB connection pooling
- Implement caching (Redis)
- Use CDN for static assets
- Consider load balancing for high traffic
- Optimize database queries

---

For questions or issues, refer to the main README or create an issue on GitHub.
