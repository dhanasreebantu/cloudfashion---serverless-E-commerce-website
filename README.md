# ☁️ CloudFashion — Serverless E-Commerce Web Application

CloudFashion is a **serverless e-commerce web application** built using **AWS cloud services**.  
The project demonstrates how a complete frontend and backend can be designed, integrated, and deployed without using any traditional server.

This application allows users to browse products, add them to a cart, and place orders securely using a cloud-based backend.

---

## 🚀 Features

- 🛍️ Browse fashion products
- ➕ Add items to cart
- 🛒 View and manage cart
- 📦 Place orders securely
- ☁️ Fully serverless architecture
- 📊 Order data stored in DynamoDB
- 🔗 Frontend and backend integrated using API Gateway

---

## 🏗️ Architecture Overview

Frontend (HTML, CSS, JavaScript)
|
| HTTPS (REST API)
↓
API Gateway
↓
AWS Lambda (Node.js)
↓
Amazon DynamoDB

---

## 🧑‍💻 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend (Serverless)
- AWS Lambda (Node.js)
- Amazon API Gateway (REST API)
- Amazon DynamoDB

### Cloud & Tools
- AWS S3 (Frontend Hosting)
- AWS CloudWatch (Logs & Monitoring)
- GitHub (Version Control)

---

## 📂 Project Structure

cloudfashion/
│
├── frontend/
│ ├── index.html
│ ├── menu.html
│ ├── cart.html
│ ├── profile.html
│ ├── style.css
│ └── script.js
│
├── backend/
│ └── lambda/
│ └── index.js
│
└── README.md
---

## 🔄 Application Flow

1. User selects products from the frontend
2. Cart data is stored temporarily in `localStorage`
3. On placing the order:
   - Frontend sends order details to API Gateway
   - API Gateway triggers AWS Lambda
   - Lambda stores order data in DynamoDB
4. Order confirmation is shown to the user

---

## ⚙️ How to Run the Project

### Frontend
- Open `index.html` using Live Server  
  **or**
- Deploy frontend files to **AWS S3**

### Backend
- Deploy Lambda function using AWS Console
- Connect Lambda to API Gateway
- Update API endpoint in `script.js`

---

## ☁️ Deployment

- **Frontend**: Hosted on AWS S3
- **Backend**: AWS Lambda + API Gateway
- **Database**: DynamoDB
- **Source Code**: GitHub

---

## 🎯 Learning Outcomes

- Understanding of **serverless architecture**
- Hands-on experience with **AWS Lambda & DynamoDB**
- REST API integration using **API Gateway**
- Frontend & backend integration
- Real-world cloud project deployment
- Usage of IAM Roles
- Sending Notifications through **AMAZON SNS**
  
---

## 🌟 Acknowledgement

This project was built as part of hands-on learning in **cloud computing and serverless application development**.
