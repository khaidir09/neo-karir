# Project Overview

Neo-Karir adalah aplikasi game edukasi interaktif yang dirancang untuk memenuhi Capaian Pembelajaran (CP) mata pelajaran Koding dan Kecerdasan Artifisial. Game ini mengajarkan siswa tentang etika AI, pemrosesan basis data, dan berpikir komputasional melalui simulasi menjadi seorang "AI Auditor" di sebuah perusahaan rekrutmen.

## Technical Constraints (MANDATORY)

- Target Platform: HTML5 & APK (via Capacitor).
- Target Display: Interactive Flat Panel (IFP).
- Resolution: Fixed 1280 x 720 px (Landscape).
- UI/UX: High-touch area (min 48px), dark mode (Cyberpunk/Futuristic theme), no hover dependency (for touch screens).
- Framework: React.js + Tailwind CSS.
- Assets: Assets will be provided as static images/SVGs in src/assets.

## Core Features & Logic

Aplikasi ini terdiri dari 3 Level Utama dan 1 Evaluasi Akhir:

### Level 1: Database Cleaner (SQL Logic)

Objective: Cleaning biased/messy data using logic.
Mechanism: Drag-and-drop code blocks to form a valid SQL query (e.g., SELECT \* FROM candidates WHERE skills = 'coding').
Educational Goal: Database concepts & Computational Thinking (Abstraction).

### Level 2: Fairness Slider (AI Bias Audit)

Objective: Balancing AI model weight to eliminate gender/regional bias.
Mechanism: Sliders to adjust "Weightage" of different parameters (Skills vs Gender vs Location). Real-time chart updates to show impact on fairness.
Educational Goal: AI Ethics & Social Impact.

### Level 3: Security Toggle (Data Privacy)

Objective: Implementing data masking for sensitive information.
Mechanism: Toggle switches to mask/encrypt NIK, Address, and Phone Numbers in a data table.
Educational Goal: Data Security & Responsibility.

### Evaluation & Certification

Quiz: 10 multiple-choice questions with scenario-based logic.
Certificate: Generate a PDF certificate using jsPDF upon completion (score based on Game Performance + Quiz Score).

## Instructions for AI Assistant

Code Style: Modular components, clean state management (React Hooks), and Tailwind-first styling.
State Management: Track progress from Level 1 to 3 and store quiz results for the final certificate.
Navigation: Sequential navigation (Level 1 -> 2 -> 3 -> Quiz -> Certificate).
Responsiveness: Focus only on 1280x720 aspect ratio. Use container with fixed dimensions and margin: auto.

## File Structure

src/components/: Reusable UI elements (Button, Card, Modal).
src/levels/: Logic and UI for each of the 3 levels.
src/context/: Game state context (User name, scores, level progress).
src/utils/: Certificate generator and helper functions.
