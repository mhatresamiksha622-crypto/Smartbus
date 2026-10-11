# 🚌 SmartBus Seat Booking and Availability System

## 📌 Project Description
SmartBus is a bus seat booking and availability system developed using Verilog HDL, HTML, CSS, and JavaScript.

The project helps users book seats, release booked seats, and check the availability of seats in a bus with 8 seats.

## 🎯 Objectives
- To book a bus seat.
- To release a booked seat.
- To display occupied and available seats.
- To detect when the bus is full.
- To simulate the hardware design using Icarus Verilog.

## 🛠️ Technologies Used
- Verilog HDL
- Icarus Verilog
- HTML
- CSS
- JavaScript
- GitHub

## ⚙️ Features
- Total of 8 seats.
- Seat booking and releasing.
- Live occupied seat count.
- Available seat count.
- Bus full status indicator.
- Reset option.
- Activity log.

## 📁 Project Files
- `smartbus.v` – Main Verilog module.
- `smartbus_tb.v` – Verilog testbench.
- `index.html` – Website structure.
- `style.css` – Website design.
- `script.js` – Booking and seat management functions.

## ▶️ How to Run the Verilog Project
1. Install Icarus Verilog.
2. Keep `smartbus.v` and `smartbus_tb.v` in the same folder.
3. Open the terminal in that folder.
4. Run the command:

   `iverilog -o smartbus smartbus.v smartbus_tb.v`

5. Execute the simulation:

   `vvp smartbus`

## 🌐 How to Run the Website
1. Open `index.html` in a web browser.
2. Select a seat.
3. Click Book Seat to book it.
4. Click Release Seat to release it.
5. Click Reset to make all seats available again.

## ✅ Expected Result
The system displays seat status, occupied seats, available seats, and whether the bus is full.

## 👩‍💻 Project Information
**Project Name:** SmartBus Seat Booking and Availability System  
**Domain:** Digital Logic Design and Web Development
