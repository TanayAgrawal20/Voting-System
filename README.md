# 🗳️ Online Voting System

## 📌 Project Overview

The **Online Voting System** is a web-based application designed to conduct elections in a secure, transparent, and efficient manner. It enables voters to cast their votes online, eliminating the need for physical polling booths and manual vote counting. The system ensures fairness, voter privacy, and data security through role-based access and OTP-based verification.

The system is divided into two main modules:

* **Admin Module**
* **User Module**

---

## 🚀 Features

### 🔐 Admin Module

* Create elections by specifying:

  * Election title
  * Election type
* Add multiple candidates with:

  * Photo
  * Party name
  * Party symbol
  * Description
* Manage elections with options to:

  * View candidates
  * Start an election
  * Stop an election
  * Delete an election
* View voting data from the database (live auto-update **under development**)

---

### 👤 User Module

* Secure user registration using:

  * Name
  * Mobile number
  * Aadhaar number
  * Address
* One-to-one mapping between mobile number and Aadhaar number
* Login using OTP generated via **2Factor Website API**

  * OTP is used only for verification
  * Not implemented as full 2-factor authentication
* User dashboard with:

  * Active elections
  * Upcoming elections
  * Past elections
* Vote once in active elections
* Duplicate voting prevention
* Automatic logout after successful voting

---

### 📊 Live Result Display (🚧 Under Development)

* Live result feature is currently **under development**
* Real-time vote updates will be implemented using:

  * WebSockets / Socket.IO (planned)
  * Polling or event-based updates
* Currently, results can be viewed **after election completion**

---

## 🛠️ Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### OTP Service

* **2Factor Website API**

  * Used only for OTP generation and verification
  * Not full two-factor authentication

---

## 🔒 Security Measures

* OTP-based login verification
* Role-based access control
* One vote per Aadhaar number
* Secure session handling
* Prevention of multiple votes

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js
* MongoDB
* 2Factor API key


