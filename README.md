# CodeZ

CodeZ is an AI-powered coding assistant that provides real-time code generation, optimization, and intelligent suggestions to enhance developer productivity.

## 🚀 Features

- **AI-Powered Code Assistance**: Integrated **Gemini AI** for real-time code generation and optimization.
- **Real-time Updates**: Leveraged **Convex** for instant database updates.
- **Seamless Authentication**: Implemented **Google Auth** for secure user login.
- **Modern UI/UX**: Designed an intuitive interface with **Shadcn UI** and **Tailwind CSS**.

## 🛠 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Shadcn UI
- **Backend**: Convex (Real-time Database)
- **AI Integration**: Gemini API
- **Authentication**: Google Auth

### Project demo: https://code-z-weld.vercel.app

## 📂 Project Structure

```
CodeZ/
│── src/
│   ├── components/  # UI components
│   ├── pages/       # Next.js pages
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Utilities & helpers
│   ├── styles/      # Global styles
│── public/          # Static assets
│── convex/          # Database & API logic
│── README.md        # Project documentation
│── package.json     # Dependencies & scripts
```

## 🔧 Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/CodeZ.git
   cd CodeZ
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file and configure the necessary API keys:
   ```env
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment

You can deploy this project using platforms like **Vercel**:
```sh
vercel
```

## 📌 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📜 License

This project is licensed under the **MIT License**.

---
