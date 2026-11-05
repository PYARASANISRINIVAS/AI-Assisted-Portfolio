# Personal Knowledge Base

A centralized knowledge base containing professional information, technical skills, projects, certifications, achievements, and technical interests. This document serves as the primary knowledge source for my Personal Assistant RAG Chatbot.


## Personal Profile

I am a technology enthusiast focused on Artificial Intelligence, Machine Learning, Data Science, and Generative AI. I work with Python, machine learning algorithms, data processing libraries, and modern AI frameworks to develop practical solutions to real-world problems.

My technical interests include building intelligent applications using Machine Learning, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), and Agentic AI.


## Education

- Course: Bachelor of Technology (B.Tech)
- Branch: Computer Science and Engineering (CSE)
- College: CMR Engineering College
- University: Jawaharlal Nehru Technological University Hyderabad (JNTUH)
- CGPA: 8.40/10



## Technical Skills

### Data Science and Machine Learning
- Python, SQL, NumPy, Pandas
- Exploratory Data Analysis (EDA) and Statistical Analysis
- Data Cleaning, Preprocessing and Feature Engineering
- Data Visualization (Matplotlib, Seaborn)
- Machine Learning Algorithms: Regression, Classification and Clustering
- Model Training, Hyperparameter Tuning and Evaluation
- Scikit-learn

### Generative AI and LLM Development
- Large Language Models (LLMs) and Prompt Engineering
- Retrieval-Augmented Generation (RAG)
- LangChain and LangGraph
- Document Loading, Parsing and Chunking
- Text Embeddings and Vector Databases
- Semantic Search, Hybrid Retrieval and Reranking
- Metadata Management and Filtering
- RAG Evaluation and Optimization
- AI Agents, Tool Calling and Structured Outputs
- Agent Workflows and State Management

### Application Development and Tools
- Streamlit and FastAPI
- React and Vite
- MySQL and SQLite
- Git and GitHub
- Docker
- Jupyter Notebook and Google Colab

## 4. Projects


<!-- project 1  -->
### Project: CyberShield AI – An Automated Cyberbullying Detection and Classification System

**Project Category:** Machine Learning, Natural Language Processing (NLP)  
**Project Type:** Text Classification  
**Domain:** Cyberbullying Detection and Online Safety

#### Problem Statement – Cyberbullying Detection

The rapid growth of social media has increased the spread of cyberbullying through online messages. Manual identification is time-consuming, while traditional keyword-based filtering often fails to understand the context of messages. An automated Machine Learning system is required to detect and classify harmful online content into different cyberbullying categories.

#### Project Overview – CyberShield AI
CyberShield AI is an end-to-end Machine Learning application that uses Natural Language Processing (NLP) to automatically detect and classify cyberbullying in textual messages. The system identifies harmful content across multiple categories and provides an interactive Streamlit application for real-time predictions.

#### Technologies Used – CyberShield AI
- Programming Language: Python
- Data Processing: NumPy, Pandas
- Machine Learning: Scikit-learn
- Natural Language Processing: NLTK
- Application Development: Streamlit
- Model Serialization: Joblib

#### Dataset Details – Cyberbullying Detection Dataset
- Total Records: 47,692
- Total Features: 2
- Input Feature: Tweet (user-generated text)
- Target Feature: Type (cyberbullying category)

**Target Classification Categories:**
1. Not Cyberbullying
2. Age
3. Ethnicity
4. Gender
5. Religion
6. Other Cyberbullying

#### Text Preprocessing Techniques
- Lowercase conversion
- Punctuation and special character removal
- Number removal
- Tokenization
- Stopword removal
- Lemmatization

#### Machine Learning Algorithm – CyberShield AI
- TF-IDF Vectorization: Converts textual messages into numerical feature representations.
- Logistic Regression: Classifies messages into six cyberbullying categories.
- GridSearchCV: Performs hyperparameter tuning.
- 5-Fold Cross-Validation: Evaluates model performance across multiple data splits.

#### Model Performance – CyberShield AI
- Classification Algorithm: Logistic Regression
- Feature Extraction: TF-IDF
- Hyperparameter Tuning: GridSearchCV
- Cross-Validation: 5-Fold
- Accuracy: 84%

#### Application Features – CyberShield AI
- Accepts user-generated text messages.
- Detects whether a message contains cyberbullying.
- Predicts the corresponding cyberbullying category.
- Provides an interactive interface using Streamlit.
- Supports real-time text classification.

#### Project Objective – CyberShield AI
To develop an automated NLP-based cyberbullying detection system that helps identify harmful online messages and supports safer digital communication.

<!-- project 2 -->


### Project: AirWrite AI – Real-Time Handwritten Letter Recognition Using MediaPipe

**Project Category:** Machine Learning, Computer Vision  
**Project Type:** Image Classification  
**Domain:** Hand Gesture Recognition and Human-Computer Interaction

#### Problem Statement – Contactless Handwritten Letter Recognition
Traditional text input methods rely on physical devices such as keyboards, mice, styluses, or touchscreens. These methods require physical contact. A contactless input system is needed to recognize English alphabets written in the air using hand gestures captured through a webcam.

#### Project Overview – AirWrite AI
AirWrite AI is an end-to-end Machine Learning application that recognizes handwritten English alphabets (A–Z) written in the air using hand gestures. It uses MediaPipe Hand Landmarker to track hand movements, OpenCV to create a virtual drawing canvas, and a K-Nearest Neighbors (KNN) classifier to recognize the drawn alphabet in real time.

#### Technologies Used – AirWrite AI
- Programming Language: Python
- Computer Vision: OpenCV
- Hand Tracking: MediaPipe Hand Landmarker
- Numerical Processing: NumPy, Pandas
- Machine Learning: Scikit-learn
- Application Development: Streamlit
- Model Serialization: Joblib

#### Dataset Details – English Alphabet Image Dataset
- Total Images: 6,831
- Total Classes: 26
- Classes: English Alphabets (A–Z)
- Images per Class: Approximately 250–300
- Problem Type: Image Classification

#### Image Preprocessing Techniques – AirWrite AI
- Image Loading
- Grayscale Conversion
- Image Resizing to 100 × 100 pixels
- NumPy Array Conversion
- Image Flattening into Feature Vectors
- Model Input Preparation

#### Hand Detection and Air-Writing – MediaPipe
- Detects hand landmarks in real time using MediaPipe Hand Landmarker.
- Tracks index fingertip movement.
- Creates a virtual drawing canvas.
- Captures handwritten letters through webcam input.
- Prepares the captured drawing for alphabet recognition.

#### Machine Learning Algorithm – AirWrite AI
- K-Nearest Neighbors (KNN) for handwritten alphabet classification.
- Number of Neighbors (K): 7.
- Distance Metric: Euclidean Distance.
- RandomizedSearchCV for hyperparameter tuning.
- Evaluated multiple baseline Machine Learning algorithms before selecting KNN.

#### Model Performance – AirWrite AI
- Classification Algorithm: K-Nearest Neighbors (KNN).
- Number of Neighbors: 7.
- Distance Metric: Euclidean.
- Final Accuracy: 82%.

#### Application Features – AirWrite AI
- Real-time hand tracking using a webcam.
- Air-writing using the index finger.
- Virtual drawing canvas.
- Automatic image preprocessing.
- Real-time handwritten alphabet prediction.
- Interactive Streamlit application.


<!-- project 3  -->

### Project: Student Stress Prediction System – Machine Learning-Based Student Stress Classification

**Project Category:** Data Science, Machine Learning  
**Project Type:** Binary Classification  
**Domain:** Education and Student Well-being

#### Problem Statement – Student Stress Prediction
Student stress is influenced by various lifestyle, academic, and personal factors, including sleep patterns, study hours, social media usage, attendance, examination pressure, and family support. This project aims to develop a Machine Learning system that predicts whether a student is likely to be Stressed or Relaxed based on these factors.

#### Project Overview – Student Stress Prediction System
The Student Stress Prediction System is a Machine Learning web application that analyzes student lifestyle and academic information to predict stress levels. It uses a K-Nearest Neighbors (KNN) classifier and provides real-time predictions through an interactive Streamlit application.

#### Technologies Used – Student Stress Prediction System
- Programming Language: Python
- Data Processing: NumPy, Pandas
- Machine Learning: Scikit-learn
- Application Development: Streamlit
- Model Serialization: Joblib

#### Dataset Details – Student Lifestyle and Stress Prediction Dataset
- Dataset Source: Kaggle
- Input Features: 8
- Features:
  - Student Type (School, College, Working Student)
  - Sleep Hours
  - Study Hours
  - Social Media Hours
  - Attendance Percentage
  - Exam Pressure
  - Family Support
  - Month
- Target Classes:
  - 0: Stressed
  - 1: Relaxed

#### Machine Learning Algorithm – Student Stress Prediction
- K-Nearest Neighbors (KNN) Classifier for binary classification.
- Uses lifestyle, academic, and personal attributes to predict student stress categories.
- Model serialized using Joblib (`knn_cls.pkl`).

#### Model Performance – Student Stress Prediction
- Classification Algorithm: K-Nearest Neighbors (KNN).
- Overall Accuracy: 80%.

**Classification Metrics:**

| Class | Precision | Recall | F1-Score |
|---|---:|---:|---:|
| Stressed | 0.83 | 0.89 | 0.86 |
| Relaxed | 0.70 | 0.58 | 0.63 |

#### Application Features – Student Stress Prediction System
- Accepts student lifestyle and academic information.
- Predicts whether a student is Stressed or Relaxed.
- Provides instant prediction results.
- Interactive Streamlit web application.
- Deployed on Streamlit Community Cloud.

#### Project Links – Student Stress Prediction System
- Live Application: https://students-stress-prediction.streamlit.app/
- GitHub Repository: https://github.com/PYARASANISRINIVAS/student-stress-prediction
- Dataset: https://www.kaggle.com/datasets/sridevilavanyacse/student-lifestyle-and-stress-prediction-dataset


<!-- project 4  -->

### Project: AgriYield AI – Intelligent Crop Yield Prediction for Indian Agriculture

**Project Category:** Data Science, Machine Learning  
**Project Type:** Regression  
**Domain:** Agriculture and Predictive Analytics

#### Problem Statement – Agricultural Crop Yield Prediction
Crop yield in India depends on several environmental, geographical, and farming-related factors, including rainfall, temperature, soil conditions, fertilizer usage, pesticide application, crop type, and cultivation area. Traditional estimation methods often struggle to capture the relationships between these variables, making crop production difficult to predict accurately. This project aims to use Machine Learning to predict crop yield and support data-driven agricultural planning and resource management.

#### Project Overview – AgriYield AI
AgriYield AI is an end-to-end Machine Learning application that predicts agricultural crop yield using historical agricultural, environmental, and geographical data. It analyzes factors such as state, district, crop, season, rainfall, temperature, fertilizer usage, pesticide usage, and cultivated area to estimate crop yield. The application provides an interactive interface for crop yield prediction.

#### Technologies Used – AgriYield AI
- Programming Language: Python
- Data Processing: NumPy, Pandas
- Data Visualization: Matplotlib, Seaborn
- Machine Learning: Scikit-learn
- Model Serialization: Joblib
- Application Development: Streamlit

#### Dataset Details – Indian Agricultural Crop Yield Dataset
- Total Records: 21,750
- Data Collection Period: 2000–2026
- Geographical Coverage: 31 Indian States
- Dataset Features:
  - State
  - District
  - Crop
  - Season
  - Area
  - Rainfall
  - Temperature
  - Fertilizer Usage
  - Pesticide Usage
  - Production
  - Crop Yield

#### Data Preprocessing and Feature Engineering – AgriYield AI
- Data Cleaning and Handling Missing Values
- Exploratory Data Analysis (EDA)
- Categorical Feature Encoding
- Feature Engineering
- Feature Selection
- Hyperparameter Tuning

#### Machine Learning Algorithm – AgriYield AI
- Decision Tree Regressor for crop yield prediction.
- Feature selection and engineering to improve model performance.
- Hyperparameter tuning to optimize regression performance.

#### Model Performance – AgriYield AI
- Regression Algorithm: Decision Tree Regressor.
- R² Score: 96%.

#### Application Features – AgriYield AI
- Predicts crop yield using agricultural and environmental parameters.
- Supports state, district, crop, and season-based inputs.
- Provides real-time crop yield predictions.
- Interactive Streamlit application.

#### Project Links – AgriYield AI
- Live Application: https://huggingface.co/spaces/PyarasaniSrinivas/AgriYield_AI


<!-- project 5  -->
### Project: Smart Traffic Sign Recognition and Alert System

**Project Category:** Machine Learning, Artificial Neural Networks, Computer Vision  
**Project Type:** Image Classification  
**Domain:** Intelligent Transportation Systems and Road Safety

#### Problem Statement – Automated Traffic Sign Recognition
Traffic signs provide essential information about speed limits, road conditions, warnings, and traffic regulations. Manually identifying traffic signs while driving can be challenging. An automated recognition system is needed to classify traffic signs from images, videos, and live camera feeds and provide timely alerts to support driver awareness and road safety.

#### Project Overview – Smart Traffic Sign Recognition and Alert System
An end-to-end Machine Learning application that uses an Artificial Neural Network (ANN) to recognize and classify traffic signs. The system accepts image, video, and live camera inputs, predicts the corresponding traffic sign, displays its confidence score, and generates voice alerts for detected signs.

#### Technologies Used – Smart Traffic Sign Recognition
- Programming Language: Python
- Deep Learning Framework: TensorFlow, Keras
- Numerical Processing: NumPy, Pandas
- Computer Vision: OpenCV, MediaPipe
- Machine Learning Utilities: Scikit-learn
- Data Visualization: Matplotlib, Seaborn
- Application Development: Streamlit
- Model Utilities: Joblib

#### Dataset Details – Traffic Sign Classification Dataset
- Dataset File: `traffic_sign.csv`
- Image Size: 32 × 32 pixels
- Input Data: RGB/BGR pixel values
- Feature Representation: Flattened image pixel features
- Target: Multiple traffic sign classes

#### Image Preprocessing Techniques – Traffic Sign Recognition
- Image Resizing to 32 × 32 pixels.
- Pixel Value Conversion to Floating-Point Format.
- Pixel Normalization using `/255.0`.
- Image Flattening into Feature Vectors.
- Model Input Preparation.

#### Artificial Neural Network Architecture – Traffic Sign Classification
- Model Type: Artificial Neural Network (ANN).
- Hyperparameter Optimization: Random Search.
- Hidden Layers: 3.
- Neurons: 160, 192, 160.
- Dropout Rates: 0.1 and 0.3.
- Learning Rate: 0.000321.
- Batch Size: 16.

#### Model Performance – Traffic Sign Recognition
- Algorithm: Artificial Neural Network (ANN).
- Validation Accuracy: 75.41%.

#### Application Features – Traffic Sign Recognition and Alert System
- Image-based traffic sign prediction.
- Video-based traffic sign recognition.
- Real-time traffic sign recognition using a live camera.
- Displays predicted traffic sign and confidence score.
- Generates voice alerts for detected traffic signs.
- Interactive Streamlit application.

#### Project Links – Smart Traffic Sign Recognition
- Live Application: https://traffic-sign-alert-system.streamlit.app/
- GitHub Repository: https://github.com/PYARASANISRINIVAS/TrafficSign-AI-Traffic-Sign-Alert-System

<!-- project 6  -->
### Project: Decoding Delhi's Air Quality – AQI and Weather Analysis 2025

**Project Category:** Data Science, Data Analytics  
**Project Type:** Exploratory Data Analysis (EDA)  
**Domain:** Environmental Data Analytics and Air Pollution Monitoring

#### Problem Statement – Delhi Air Quality Analysis
Delhi experiences varying air pollution levels due to vehicular emissions, industrial activities, construction dust, and changing weather conditions. Understanding pollution patterns, identifying high-risk locations, and analyzing the influence of weather on AQI are essential for environmental monitoring and public health awareness. This project aims to analyze air quality and weather data to identify pollution trends, hotspots, and contributing factors.

#### Project Overview – Delhi AQI and Weather Analysis
An end-to-end Data Analytics project that analyzes Delhi's hourly Air Quality Index (AQI) and weather observations throughout 2025. The project uses Exploratory Data Analysis and data visualization to examine pollutant concentrations, seasonal patterns, location-wise pollution levels, and relationships between weather conditions and air quality. The findings are presented through an interactive Streamlit dashboard.

#### Technologies Used – Delhi AQI Analysis
- Programming Language: Python
- Data Processing: Pandas, NumPy
- Data Visualization: Matplotlib, Seaborn
- Dashboard Development: Streamlit

#### Dataset Details – Delhi Air Quality and Weather Dataset 2025
- Data Frequency: Hourly observations
- Data Collection Period: 2025
- Geographical Coverage: Multiple locations across Delhi
- Dataset Features:
  - Location, Latitude, Longitude
  - Temperature, Humidity, Pressure, Wind Speed
  - Weather Condition
  - AQI
  - PM2.5, PM10, NO₂, CO
  - Date, Time, Datetime

#### Data Cleaning and Exploratory Data Analysis – Delhi AQI
- Date and Time Conversion into a unified Datetime feature.
- Duplicate Column Removal and Column Standardization.
- Missing Value and Duplicate Record Validation.
- Pollutant Measurement Validation.
- Coordinate and Location Consistency Checks.
- AQI Validation based on CPCB's 0–500 range.
- Clipped 6,903 AQI values exceeding 500 to the maximum value of 500.
- Analyzed pollutant distributions, seasonal patterns, and weather relationships.

#### Data Analysis Techniques – Delhi AQI and Weather Analysis
- Monthly and Hourly AQI Trend Analysis.
- Seasonal Pollution Pattern Analysis.
- Location-wise AQI Comparison.
- Pollution Hotspot Identification.
- Pollutant Analysis of PM2.5, PM10, NO₂, and CO.
- Correlation Analysis between Weather Parameters and AQI.
- Temperature, Humidity, Wind Speed, and Pressure Influence Analysis.

#### Key Findings – Delhi Air Quality Analysis
- PM2.5 showed the strongest influence on AQI among the analyzed pollutants.
- PM10 also contributed significantly to poor air quality.
- Low wind speeds were associated with pollutant accumulation.
- Temperature, humidity, and other weather conditions influenced pollution patterns.
- Certain locations experienced consistently higher pollution levels.

#### Application Features – Delhi AQI Dashboard
- Interactive Streamlit dashboard.
- Pollution trend and seasonal analysis.
- Weather influence analysis.
- Time-based and location-based comparisons.
- Pollution hotspot identification.
- Public health alerts and safety recommendations.
- Government and environmental policy recommendations.

#### Project Links – Delhi AQI and Weather Analysis
- Live Dashboard: https://srinivas-delhiweatheraqi.streamlit.app/
- GitHub Repository: https://github.com/PYARASANISRINIVAS/Delhi-AQI-Analysis


<!-- project 7  -->
<!-- project 8  -->
<!-- project 9  -->
<!-- project 10  -->
<!-- project 11 -->
<!-- project 12 -->
<!-- project 13  -->
<!-- project 14  -->
<!-- project 15  -->

## Certifications

This section contains professional certifications and technical training credentials.

### Proficiency Certificate in Data Structures and Algorithms

- Certification: Proficiency Certificate in Data Structures and Algorithms
- Provider: Smart Interviews
- Domain: Data Structures and Algorithms

### AWS Academy Cloud Foundations

- Certification: AWS Academy Cloud Foundations
- Provider: Amazon Web Services (AWS)
- Domain: Cloud Computing

### CCNA Introduction to Networks

- Certification: Introduction to Networks
- Provider: Cisco Networking Academy
- Domain: Computer Networking
- Year: 2023

### SQL Certification

- Certification: SQL
- Provider: Innomatics Research Labs
- Year: 2026
- Domain: Database Management and SQL

---

## Technical Writing and Publications

This section contains technical articles and educational content related to Data Science and Artificial Intelligence.

### Numerical and Categorical Data Preprocessing in Machine Learning

- Topic: Data Preprocessing
- Domain: Machine Learning
- Platform: Medium
- Article URL: [Add Medium article URL]

### Complete Machine Learning Framework and Workflow

- Topic: Machine Learning Workflow
- Domain: Machine Learning
- Platform: Medium
- Article URL: [Add Medium article URL]

### A Good Understanding of AI, ML, DL and Generative AI

- Topic: Artificial Intelligence Fundamentals
- Domain: AI and Generative AI
- Platform: Medium
- Article URL: [Add Medium article URL]

---

## 7. Ongoing Project – Personal Assistant RAG Chatbot

### Project Overview

The Personal Assistant RAG Chatbot is an intelligent conversational application designed to answer questions about my professional profile, technical skills, projects, certifications, achievements, and technical interests.

The system uses Retrieval-Augmented Generation to retrieve relevant personal information and generate context-aware responses.

### Problem Statement

Personal information is usually distributed across multiple sources, such as GitHub repositories, resumes, project documentation, certifications, and technical articles.

Retrieving specific information from these sources manually is time-consuming.

The objective is to create a centralized personal knowledge base and build a conversational assistant that can retrieve and answer questions using that information.

### Proposed RAG Architecture

1. Prepare a centralized Markdown knowledge base.
2. Parse and extract structured document content.
3. Split the document using Markdown heading-based chunking.
4. Attach document-level and chunk-level metadata.
5. Generate embeddings for the chunks.
6. Store embeddings and metadata in a vector database.
7. Convert user queries into searchable representations.
8. Apply metadata-aware retrieval when appropriate.
9. Retrieve relevant chunks using vector and keyword search.
10. Rerank the retrieved results.
11. Pass relevant context to the LLM.
12. Generate grounded responses.


### Planned Advanced Features

- Context-aware conversations.
- Chat history management.
- Multi-session support.
- Semantic search.
- Hybrid retrieval.
- Metadata filtering.
- Contextual retrieval.
- Source-based answers.
- RAG evaluation.


### Achievements+

### Career Interests