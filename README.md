# Currency Converter

Welcome to the Currency Converter project! This web application allows users to convert between different currencies using real-time exchange rates and displays country flags alongside the currency codes for a better user experience.

## Features

- Real-time currency conversion using the latest exchange rates.
- Display of country flags for the selected currencies.
- User-friendly interface built with HTML, CSS, and JavaScript.

## APIs Used

### 1. Country Flags
- **Website:** [Flags API](https://flagsapi.com/)
- **API URL Structure:** `https://flagsapi.com/{countrycode}/flat/64.png`
- **Description:** This API provides images of country flags. The `countrycode` parameter is the two-letter country code.

### 2. Rate Conversion
- **Github Repo Link:** [Exchange API](https://github.com/fawazahmed0/exchange-api/blob/main/README.md#additional-fallback-url-on-cloudflare)
- **API URL Structure:** `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base-curr}.json`
- **Description:** This API provides the latest exchange rates for various currencies. The `base-curr` parameter is the base currency code.

## Getting Started

### Prerequisites

To run this project, you need a web browser and a code editor.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/currency-converter.git
    ```

2. Navigate to the project directory:
    ```sh
    cd currency-converter
    ```

3. Open `index.html` in your web browser to view the currency converter.

### Project Structure

- `index.html` - The main HTML file that contains the structure of the web page.
- `style.css` - The CSS file that contains the styling for the web page.
- `script.js` - The JavaScript file that contains the logic for currency conversion and API interactions.

### Usage

1. Select the base currency and the target currency from the dropdown menus.
2. Enter the amount you want to convert.
3. Click the "Convert" button to see the converted amount.
4. The country flags for the selected currencies will be displayed alongside the currency codes.

### Example

To get the flag for the United States:
```html
<img src="https://flagsapi.com/US/flat/64.png" alt="US Flag">
