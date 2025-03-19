Here’s a **detailed description** of the **frontend prototype** for developers to build this app.  

---

# **Bilingual Learning App – Frontend Development Guide**  
### **Tech Stack Recommendation**  
- **Framework**: React Native (for cross-platform mobile development)  
- **State Management**: Redux / Zustand (for managing user data and settings)  
- **Navigation**: React Navigation  
- **UI Library**: NativeBase / ShadCN / Custom Components  
- **Audio/Video Handling**: `react-native-video`, `react-native-track-player`  
- **Storage**: AsyncStorage / SQLite (for local bookmarks, vocabulary, and saved progress)  
- **API Calls**: Axios or Fetch API  

---

## **1. App Structure & Routing**  
### **Navigation Flow**  
- **Main Navigation**: Bottom Tab Navigation  
- **Stack Navigation**: Inside each main tab for subpages  

#### **Main Screens** (Bottom Tabs)  
1. **Home Screen (`/home`)** – Displays all main categories  
2. **Library (`/library`)** – User’s saved books, podcasts, videos  
3. **Learning (`/learning`)** – Progress tracking, bookmarked words  
4. **Settings (`/settings`)** – Language, appearance, user preferences  

#### **Sub-Screens & Features**  
- **Bilingual Reading (`/reading/:id`)**  
- **Podcast Player (`/podcast/:id`)**  
- **Book Reader (`/book/:id`)**  
- **Video Player (`/video/:id`)**  

---

## **2. UI & Component Breakdown**  
### **1. Home Screen (`HomeScreen.tsx`)**  
#### **Components:**  
- **Header**: App name + Search bar + Profile button  
- **Category List (`<CategoryCard />`)**  
  - Displays:  
    - **Bilingual Reading** (📖)  
    - **Podcasts** (🎙️)  
    - **Videos** (📺)  
    - **Books & Stories** (📚)  
    - **Video Courses** (🎓)  
  - Clicking a category navigates to its respective screen  

---

### **2. Bilingual Reading (`ReadingScreen.tsx`)**  
#### **Components:**  
- **Audio Player (`<AudioPlayer />`)**  
  - Play/Pause, Seek, Speed Control  
- **Reading Mode Toggle** (Paragraph | Table View)  
- **Script Display (`<TextHighlight />`)**  
  - Synchronized text highlighting  
  - Tap on a Chinese word → Show popup with meaning + pinyin  
- **PinYin Toggle (`<ToggleButton />`)**  
- **Bottom Section (4 Features)**
  1. **Vocabulary List (`<WordList />`)**  
  2. **Grammar Explanation (`<GrammarSection />`)**  
  3. **Shadowing (`<Recording />`)** – Record user voice & playback  
  4. **Quiz (`<Quiz />`)** – Multiple-choice questions  

---

### **3. Podcast (`PodcastScreen.tsx`)**  
#### **Components:**  
- **Podcast List (`<PodcastCard />`)**  
  - Title, Thumbnail, Duration  
  - Play button → Opens **Podcast Player**  
- **Podcast Player (`PodcastPlayer.tsx`)**  
  - Play/Pause, Seek, Speed Control  
  - Transcript Display (syncs with audio)  

---

### **4. Books & Stories (`BookScreen.tsx`)**  
#### **Components:**  
- **Book List (`<BookCard />`)**  
  - Thumbnail, Title, Difficulty Level  
  - Clicking opens **Book Reader**  
- **Book Reader (`BookReader.tsx`)**  
  - Dark/Light Mode Toggle  
  - Font Size Adjustment  
  - Bookmark Button  
  - Save Words Button  

---

### **5. Video Player (`VideoScreen.tsx`)**  
#### **Components:**  
- **Video List (`<VideoCard />`)**  
  - Thumbnail, Title, Duration  
  - Clicking opens **Video Player**  
- **Video Player (`VideoPlayer.tsx`)**  
  - Play/Pause, Seek  
  - Dual-language subtitles toggle  
  - Save video button  

---

## **3. API Integration**  
### **1. Authentication (if needed)**
- **Login (`POST /auth/login`)**  
- **Register (`POST /auth/register`)**  
- **Get User Data (`GET /user`)**  

### **2. Content Fetching**
- **Get Bilingual Articles (`GET /articles`)**  
- **Get Podcasts (`GET /podcasts`)**  
- **Get Books (`GET /books`)**  
- **Get Videos (`GET /videos`)**  

### **3. User Data**
- **Save Progress (`POST /progress`)**  
- **Save Bookmarks (`POST /bookmarks`)**  
- **Get Saved Content (`GET /user/library`)**  

---

## **4. UI/UX Considerations**  
- **Dark Mode**: Store preference in AsyncStorage  
- **Offline Mode**: Allow downloads for offline reading  
- **Smooth Animations**: Use `react-native-reanimated` for UI transitions  

---

## **5. Developer Checklist**
✔️ Implement Navigation  
✔️ Design & Build Components  
✔️ Integrate API Calls  
✔️ Optimize Performance  
✔️ Implement Offline Support  

---

This should provide everything needed for the frontend prototype. Let me know if you need adjustments! 🚀
