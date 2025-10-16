# AI Travel Planner for Students 🗺️✈️

An intelligent, single-page web application designed to help students plan budget-friendly trips. 
By leveraging the power of Google's Gemini AI, this tool automatically generates detailed, day-by-day itineraries complete with recommendations, 
budget breakdowns, and an interactive map.

## ✨ Features

  * **🤖 AI-Powered Itinerary Generation:** Enter your destination, dates, budget, and number of travelers to get a custom-built travel plan in seconds.
  * **💰 Budget Management:** Automatically generates a budget breakdown for accommodation, food, activities, and local travel.Includes a visual progress bar to track estimated spending against the total budget.
  * **📍 Interactive Map View:** All itinerary events, hotels, and restaurant recommendations are plotted on an interactive Leaflet.js map for easy visualization.
  * **👤 User Authentication:** Secure sign-in/sign-up using Google Identity Services.
  * **💾 Save & Load Trips:** Authenticated users can save their generated itineraries to their profile and load them again later.
  * **✏️ Customizable Plan:** Easily reorder events within a day using a drag-and-drop interface. Times are automatically updated.
  * **🏨 Recommendations:** Get AI-curated suggestions for budget-friendly hotels and top-rated local restaurants.
  * **✈️ Travel Cost Estimator:** A handy tool to estimate the round-trip travel cost from your current location to the destination.
  * **📱 Fully Responsive:** A clean and modern UI built with Tailwind CSS that works seamlessly on desktop and mobile devices.

-----

## 🚀 Live Demo

You can try the application live here: **[AI Travel Planner Demo](https://chiruratnala.github.io/AI-Travel-Planner-/)**

-----

## 📸 Screenshot
<img width="1882" height="812" alt="Screenshot (161)" src="https://github.com/user-attachments/assets/c8b47a11-0c59-4aed-a80d-48b519a621ec" />


-----

## 🛠️ Technologies Used

  * **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
  * **Generative AI:** Google Gemini API (for itinerary and recommendation generation with JSON schema enforcement)
  * **Maps:** Leaflet.js with Geoapify map tiles
  * **Authentication:** Google Identity Services (Google Sign-In)
  * **Icons:** Lucide Icons
  * **Data Storage:** Browser `localStorage` and `sessionStorage` for user and trip data persistence.

-----

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You just need a modern web browser and a code editor.

### Setup & Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/chiruratnala/AI-Travel-Planner-.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd AI-Travel-Planner-
    ```
3.  **Run the application:**
    Since this is a simple HTML/CSS/JS project with no build step, you can open the `index.html` file directly in your browser.
    For the best experience (to avoid any CORS issues), use a live server.
    If you're using VS Code, you can install the **Live Server** extension, right-click `index.html`, and select "Open with Live Server".

**API Keys**

This project comes with pre-configured API keys in the `index.html` file, so it will work immediately after cloning.
**Note:** These keys are for demonstration purposes. It is highly recommended that you replace them with your own free keys for personal or extended use.

You can find the keys in these locations within `index.html`:
**Google Sign-In Client ID:** `<meta name="google-signin-client_id" ...>`
**Google Gemini API Key:** `const apiKey = "...";`
**Geoapify API Key:** `const geoapifyApiKey = "...";`

-----

## 🔧 How It Works

1.  **User Input:** The user signs in and provides their travel details through a simple form.
2.  **API Prompt Construction:** The JavaScript code constructs a detailed prompt for the Gemini AI model. This prompt includes the user's query and a strict JSON schema to ensure the AI's response is structured and predictable.
3.  **AI Itinerary Generation:** A request is sent to the Gemini API. The AI processes the request, adhering to constraints like budget and geographical logic, and returns a complete itinerary in JSON format.
4.  **Dynamic Rendering:** The application parses the JSON response and dynamically populates the UI, creating cards for each day's events, budget details, recommendations, and map markers. All of this is done without a page reload.
5.  **User Interaction:** The user can then interact with the generated plan by reordering events, viewing locations on the map, and saving the trip to their profile, which stores the data in the browser's `localStorage`.
