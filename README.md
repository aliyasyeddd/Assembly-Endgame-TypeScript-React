# 🕹️ Assembly: Endgame (TypeScript Edition)

> A Hangman-style word-guessing game with a programming twist — now upgraded with TypeScript for safer and more scalable code.

---

## 📘 What we learnt

01. **Vanilla TypeScript refresher**  
02. **Typing `useState`**  
03. **Typing React components**  
04. **Typing React component props**  
05. **Custom prop types**  
06. **Imported types**  
07. **Typing function props**

---

## 📝 Overview

Assembly: Endgame is a lightweight React + TypeScript game where the player guesses a hidden word, letter by letter. Each incorrect guess advances the spread of Assembly languages (visualized as colored chips). Guess the word within the allowed attempts to win — or face a programming-language-themed farewell message.

This project is great for frontend learners who want to practice React, TypeScript, accessibility (`aria-live` regions), component composition, and clean UI/UX patterns.

---

## 🚀 Features

✨ **Key features include:**

- 🔤 Letter-by-letter word guessing (Hangman-style)  
- 🧩 Visual language chips showing remaining attempts  
- 🎉 Confetti celebration on win (`react-confetti`)  
- ♿ Accessible status updates using `aria-live`  
- 🔁 Easy reset / new game flow  
- ♻️ Strong state management with typed React hooks  

---

## 🧱 Tech Stack 🧩

| Technology              | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| **React + TypeScript**  | Strongly-typed UI and components               |
| react-confetti          | Win celebration animation                      |
| clsx                    | Conditional class names                        |
| nanoid                  | Unique IDs for dynamic lists                   |
| CSS / custom styles     | UI styling and layout                          |

---

## ⚙️ Installation

1. Clone the repo:

```bash
git clone <your-repo-url>
cd your-repo
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Run the app:

```bash
npm start
# or
yarn start
```

---


## 🧩 How it works (implementation notes)

* The main component (`AssemblyEndgame`) uses `useState` to track the current word and guessed letters.
* Derived values calculate `wrongGuessCount`, `isGameWon`, and `isGameLost`.
* Language chips are rendered from a `languages` array (each language should include `name`, `backgroundColor`, and `color`).
* The on-screen keyboard disables buttons after they are guessed and prevents additional input when the game is over.
* Accessibility: status updates are provided via `aria-live` polite regions and a visually-hidden (`sr-only`) summary for screen reader users.
---

## 🖼️ Screenshots / Demo

![App Screenshot](/src/assets/demo.png)


## 💫 Author

**Aliya** — [github.com/aliyasyeddd](https://github.com/aliyasyeddd)

> *“Build. Break. Learn. Repeat.”*

---