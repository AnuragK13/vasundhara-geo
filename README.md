# Geo Data Dashboard (React)

## Project Overview

This project is a React-based Geo Data Dashboard built to visualise spatial and tabular project data in a single interface. It displays project records in a data table and plots their geographic locations on an interactive map using latitude and longitude coordinates.

The goal of this assignment was to demonstrate component design, handling of large datasets, and synchronization between UI elements.

---

## Tech Stack

* React (Vite)
* Functional Components + Hooks
* Material UI (Table UI)
* React Leaflet (Map Integration)
* Local State Management
* Mock JSON API

---

## Features Implemented

### 1. Data Table

* Displays project data with columns:

  * Project Name
  * Latitude
  * Longitude
  * Status
  * Last Updated
* Client-side sorting implemented
* Filtering supported (status based)
* Handles large datasets (5k+ rows) using list virtualization

---

### 2. Map Integration

* Interactive map built using Leaflet
* Markers plotted using project lat/long
* Popup shows project name

---

### 3. Table ↔ Map Synchronization

* Clicking a table row highlights the corresponding marker
* Clicking a marker highlights the corresponding table row
* Achieved using shared state in the parent component

---

### 4. State Management

* Managed using React local state only (`useState`, `useEffect`)
* No external state libraries used
* Clear separation between UI components and data logic

---

### 5. Performance Handling

* Implemented pagination in mock API
* Used virtualization techniques to render large datasets smoothly without UI lag

---

## Folder Structure

```
src/
 ├─ components/
 │   ├─ DataTable.jsx
 │   └─ MapView.jsx
 ├─ services/
 │   └─ api.js
 ├─ data/
 │   └─ mockData.json
 ├─ App.jsx
 └─ App.css
```

---

## Key Decisions

* **Leaflet** chosen for simplicity and open-source support
* **Material UI** used for faster table development
* **Local state** kept the architecture lightweight
* **Mock paginated API** simulated real backend behavior

---


## Time Spent

Approx. **5–7 hours**

Time was spent on:

* Project setup
* Table + Map integration
* Synchronization logic
* Performance optimization
* README & cleanup

---


## Evaluation Coverage

This project demonstrates:

* Component decomposition
* Large dataset handling
* Map + UI synchronization
* Clean and readable code structure

---

Thank you for reviewing the project 🙂
