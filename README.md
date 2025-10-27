# 🚗 Rent-a-Rover

**Rent-a-Rover** is a **multi-vendor car rental platform** that enables seamless booking, vendor management, and secure payments through an integrated dashboard system. It provides dedicated modules for **Users**, **Vendors**, and **Admins**, each with role-based access, real-time updates, and optimized user workflows.

🔗 **Live Demo:** [https://rent-a-rover-v1.vercel.app/](https://rent-a-rover-v1.vercel.app/)  
---

## 🧩 Tech Stack

**Frontend:** React, Redux Toolkit, Zod  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT, Google OAuth  
**Payments:** Razorpay Integration  
**Media Handling:** Multer, Cloudinary  
**Deployment & Security:** Cloudflare  

---

## 🚀 Features

- **Role-Based Dashboards:** Dedicated panels for Users, Vendors, and Admins to manage bookings, vehicles, and approvals efficiently.  
- **Secure Authentication:** JWT with access/refresh tokens and Google OAuth for seamless and safe user sign-in.  
- **Payment Gateway:** Integrated **Razorpay** for secure and real-time transactions.  
- **Media Uploads:** Vehicle images uploaded using **Multer** and stored on **Cloudinary** for optimized performance.  
- **Smart Search & Filters:** Advanced search, filter, and sort functionalities to enhance the browsing experience.  
- **Dynamic Locations:** Interactive pickup and drop-off selectors for accurate booking management.  
- **Scalable Architecture:** Modular backend design ensuring high performance and easy scalability.  

---

## 🛠️ Installation & Setup

To run the project locally, follow these simple steps:

1. **Clone the Repository & Install Dependencies**
   ```bash
   git clone https://github.com/Ankit-0803/rent-a-rover.git
   cd rent-a-rover
   npm install
   cd client && npm install
2. **Set Up Environment Variables**
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>

3. **Run the Development Server**
npm run dev


