Here’s a **text-based wireframe** that a designer can use to create the prototype. It describes each screen’s structure, layout, and navigation flow.  

---

# **Bilingual Learning App – Wireframe Description**  

## **1. Home Screen (`/home`)**  
**Structure:**  
- **Header (Top Bar)**  
  - [Left] App Logo  
  - [Center] Search Bar (🔍)  
  - [Right] User Profile Icon (👤)  

- **Main Content (Scrollable Categories List)**  
  - **Category Card (📖 Bilingual Reading)**  
  - **Category Card (🎙️ Podcasts)**  
  - **Category Card (📚 Books & Stories)**  
  - **Category Card (📺 Videos)**  
  - **Category Card (🎓 Video Courses)**  

- **Bottom Navigation (Persistent Tabs)**  
  - [🏠] Home  
  - [📂] My Library  
  - [📈] Learning Progress  
  - [⚙️] Settings  

---

## **2. Bilingual Reading Screen (`/reading/:id`)**  
**Structure:**  
- **Header (Back Button + Title + Bookmark Icon ⭐)**  
- **Audio Player (🎵 Play/Pause, Seek, Speed Control)**  
- **Text Display Mode Toggle (🔄 Paragraph | Table View)**  
- **Bilingual Script Display (Auto-scroll synchronized with audio)**  
  - [🔘] Toggle Pinyin Above Chinese Characters  
  - [🖱️] Tap a Word → Popup (Definition + Pinyin)  
- **Bottom Features (Tabs or Buttons)**  
  1. **📖 Vocabulary List** (Word breakdown from the article)  
  2. **📜 Grammar Explanation** (Formatted text content)  
  3. **🎤 Shadowing Mode** (Record & Playback User's Voice)  
  4. **✅ Quiz Section** (Multiple-choice questions)  

---

## **3. Podcast List (`/podcasts`)**  
**Structure:**  
- **Header (🔍 Search + Back Button)**  
- **Scrollable Podcast Cards**  
  - Thumbnail + Title + Duration  
  - Play Button → Opens Podcast Player  

### **Podcast Player (`/podcast/:id`)**  
- **Header (Back Button + Podcast Title + Save Button)**  
- **Main Player UI**  
  - Podcast Cover Image  
  - 🎵 Play/Pause, Seek, Speed Control  
- **Transcript Section (Auto-scroll with playback)**  

---

## **4. Books & Stories (`/books`)**  
**Structure:**  
- **Header (🔍 Search + Filter Button)**  
- **Book List (Grid or List View)**  
  - Cover Image + Title + Difficulty Level  
  - Click → Opens Book Reader  

### **Book Reader (`/book/:id`)**  
- **Header (Back Button + Bookmark ⭐)**  
- **Text Content Display**  
  - [🌙] Light/Dark Mode Toggle  
  - [🔠] Font Size Adjustment  
  - [⭐] Save Word Button (Adds word to vocabulary list)  

---

## **5. Video List (`/videos`)**  
**Structure:**  
- **Header (🔍 Search + Filter Button)**  
- **Video List (Grid View)**  
  - Thumbnail + Title + Duration  
  - Click → Opens Video Player  

### **Video Player (`/video/:id`)**  
- **Header (Back Button + Save Video Button)**  
- **Video Playback Controls**  
  - Play/Pause, Seek  
  - Subtitle Toggle (Single-Language | Bilingual)  

---

## **6. My Library (`/library`)**  
**Structure:**  
- **Header (Title: "My Library")**  
- **Tab Navigation (Saved Content Categories)**  
  - 📖 **Saved Bilingual Readings**  
  - 🎙️ **Saved Podcasts**  
  - 📚 **Saved Books**  
  - 📺 **Saved Videos**  

---

## **7. Learning Progress (`/learning`)**  
**Structure:**  
- **Header (Title: "Learning Progress")**  
- **Statistics Display (Graph / Progress Bar)**  
  - Total Hours Spent  
  - Vocabulary Words Learned  
  - Articles Completed  
  - Quiz Performance  

---

## **8. Settings (`/settings`)**  
**Structure:**  
- **Header (Title: "Settings")**  
- **Toggle Options & Preferences**  
  - 🌙 Dark Mode  
  - 🔊 Audio Speed Default  
  - 🌎 Language Selection  
  - 🔄 Clear Cache  

---

# **Final Notes for Designer**  
✅ **This wireframe represents the user flow and page structure**.  
✅ **Each screen includes necessary UI elements and interactions**.  

