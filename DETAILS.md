Here's a **detailed text-based wireframe** with more specific design descriptions, user interactions, and UI elements. This version should give the **designer** everything they need to build a prototype.  

---

# **Bilingual Learning App – Detailed Wireframe Description**  

## **1. Home Screen (`/home`)**  
**Purpose:** Entry point for users, showcasing available learning categories.  

### **Layout Structure:**  
- **Header (Fixed Top Bar, 64px height)**
  - [Left] **App Logo** (Small, text or icon)  
  - [Center] **Search Bar** (🔍 Placeholder: "Search articles, podcasts, books...")  
  - [Right] **User Profile Icon** (👤 Opens account settings)  

- **Main Content (Scrollable Category List)**
  - **Category Cards (Large, full-width buttons with icons)**
    - 📖 **Bilingual Reading** (Subtitle: "Read with synchronized audio")  
    - 🎙️ **Podcasts** (Subtitle: "Listen and follow the transcript")  
    - 📚 **Books & Stories** (Subtitle: "Explore bilingual literature")  
    - 📺 **Videos** (Subtitle: "Watch with dual-language subtitles")  
    - 🎓 **Video Courses** (Subtitle: "Learn with structured lessons")  

- **Bottom Navigation Bar (Fixed)**
  - [🏠] **Home** (Active)  
  - [📂] **My Library** (Saved content)  
  - [📈] **Learning Progress**  
  - [⚙️] **Settings**  

---

## **2. Bilingual Reading Screen (`/reading/:id`)**  
**Purpose:** Users read and listen to bilingual articles with interactive features.  

### **Layout Structure:**  
- **Header (Fixed, 64px height)**
  - [←] **Back Button** (Returns to Home)  
  - [📖] **Title of the Article**  
  - [⭐] **Bookmark Button** (Save for later)  

- **Audio Player (Fixed at Top, 80px height)**
  - 🎵 **Play/Pause Button**  
  - ⏩ **Seek Bar** (Shows current progress)  
  - 🎚️ **Speed Control Dropdown** (0.5x - 2x)  

- **Reading Mode Toggle (Switch between two layouts)**
  - 🔄 **Paragraph View** (Default)  
  - 📑 **Table View** (Side-by-side bilingual format)  

- **Bilingual Text Section (Scrollable)**
  - Each **sentence auto-highlights** while the audio plays.  
  - **Tappable words:**  
    - [🖱️] Tap a Chinese word → Popup (Definition + Pinyin)  
  - **Toggle Pinyin** (🔘 Show/hide pinyin above Chinese characters)  

- **Bottom Interactive Features (Fixed Tabs or Buttons)**
  1. **📖 Vocabulary List (Word breakdown)**  
  2. **📜 Grammar Explanation (Inline rules & tips)**  
  3. **🎤 Shadowing Mode (Record & Playback)**  
  4. **✅ Quiz Section (Multiple-choice test)**  

---

## **3. Podcast List (`/podcasts`)**  
**Purpose:** Users browse and select podcasts to listen to.  

### **Layout Structure:**  
- **Header (Fixed)**
  - [🔍] **Search Bar**  
  - [←] **Back Button**  

- **Podcast List (Scrollable)**
  - **Podcast Cards**
    - 🎙️ **Thumbnail Image**
    - **Title**
    - **Duration** (e.g., "12 min")
    - **Play Button** (Opens Podcast Player)

---

### **Podcast Player (`/podcast/:id`)**  
**Purpose:** Plays podcasts with real-time transcripts.  

- **Header**
  - [←] **Back Button**  
  - [⭐] **Save Podcast Button**  

- **Main Player UI**
  - 🎵 **Podcast Cover Image**  
  - ⏯️ **Play/Pause Button**  
  - ⏩ **Seek Bar**  
  - 🎚️ **Speed Control (0.5x - 2x)**  

- **Transcript Section**
  - **Auto-scroll text while playing**  
  - **Tappable words for dictionary lookup**  

---

## **4. Books & Stories (`/books`)**  
**Purpose:** Users explore and read bilingual books.  

### **Layout Structure:**  
- **Header**
  - [🔍] **Search Bar**  
  - [📂] **Filter Button** (Genre, Difficulty)  

- **Book List (Grid or List View)**
  - **Book Cover Image**  
  - **Title & Difficulty Level**  
  - 📥 **Download Button** (For offline reading)  

---

### **Book Reader (`/book/:id`)**  
**Purpose:** Provides a distraction-free reading experience.  

- **Header**
  - [←] **Back Button**  
  - [⭐] **Bookmark Button**  

- **Reading Area**
  - Adjustable **Font Size**  
  - 📜 **Light/Dark Mode Toggle**  
  - 📖 **Save Word Button** (Adds word to vocabulary list)  

---

## **5. Video List (`/videos`)**  
**Purpose:** Users browse and select bilingual videos.  

### **Layout Structure:**  
- **Header**
  - [🔍] **Search Bar**  
  - [📂] **Filter Button**  

- **Video List (Grid View)**
  - 🎬 **Thumbnail**
  - **Title & Duration**  
  - 📥 **Download Button**  

---

### **Video Player (`/video/:id`)**  
**Purpose:** Plays bilingual videos with subtitle controls.  

- **Header**
  - [←] **Back Button**  
  - [⭐] **Save Video Button**  

- **Main Player UI**
  - 🎬 **Video Playback Controls**
  - 🔠 **Subtitle Toggle (Single-Language | Bilingual)**  

---

## **6. My Library (`/library`)**  
**Purpose:** Stores user’s saved content.  

### **Layout Structure:**  
- **Header**
  - **Title: "My Library"**  

- **Tab Navigation (Saved Content Categories)**
  - 📖 **Saved Readings**  
  - 🎙️ **Saved Podcasts**  
  - 📚 **Saved Books**  
  - 📺 **Saved Videos**  

---

## **7. Learning Progress (`/learning`)**  
**Purpose:** Displays user learning stats.  

### **Layout Structure:**  
- **Header**
  - **Title: "Learning Progress"**  

- **Statistics Display (Graph / Progress Bar)**
  - 📊 **Total Hours Spent**  
  - 📖 **Vocabulary Words Learned**  
  - 🎯 **Articles Completed**  
  - ✅ **Quiz Performance**  

---

## **8. Settings (`/settings`)**  
**Purpose:** Allows users to customize preferences.  

### **Layout Structure:**  
- **Header**
  - **Title: "Settings"**  

- **Toggle Options & Preferences**
  - 🌙 **Dark Mode**  
  - 🎚️ **Audio Speed Default**  
  - 🌎 **Language Selection**  
  - 🔄 **Clear Cache**  

---

# **Final Notes for Designer**  
✅ **This wireframe details UI layout, interactions, and page structure.**  
✅ **Each screen includes essential UI elements, navigation, and key user actions.**  
✅ **Designer should create Figma wireframes or high-fidelity prototypes based on this.**  

