export default defineEventHandler(() => {
    return [
        {
            id: 0,
            title: 'TensorFlow ML Projects',
            description: 'This machine learning project contains two separate deep learning implementations using TensorFlow: one for image classification using a Convolutional Neural Network (CNN), and another for natural language processing using a Long Short-Term Memory (LSTM) network. Both models demonstrate how neural networks can be applied to visual and textual data respectively, covering essential steps such as data preprocessing, model training, and evaluation.',
            github: 'https://github.com/komikodok/traditional_machine_learning',
            image: '/tf-ml.png'
        },
        {
            id: 1,
            title: 'Expressive Assistant',
            description: 'Expressive Assistant project is an AI-powered chatbot designed to provide a more natural and expressive conversational experience. Beyond simply delivering responses, this bot can adjust its expressions based on the context of the conversation. Powered by advanced LLM (Large Language Model) technology with LangChain-Groq and LangGraph, the chatbot can generate more dynamic and context-aware responses. Built using a combination of FastAPI for backend logic processing and Laravel for handling the UI, Expressive Bot offers an interactive chat experience with an added layer of emotional expression.',
            github: 'https://github.com/komikodok/expressive_bot-llms',
            image: '/expressive-assistant.png'
        },
        {
            id: 2,
            title: 'Coding Assistant',
            description: 'Coding Assistant is an innovative project designed to enhance developers efficiency in writing and executing code. By leveraging large language model, this application provides real-time solutions for debugging and code management in an interactive environment. The main features of this application allow users to communicate with an large language model for programming assistance and execute commands directly through an integrated virtual terminal.',
            github: 'https://github.com/komikodok/coding_assistant-llms',
            image: '/coding-assistant.png'
        },
        {
            id: 3,
            title: 'Firestore Integration with FastAPI',
            description: 'This project demonstrates how to integrate Firestore with FastAPI, featuring custom serialization and structured exception handling. Built with Python 3.10+ to take advantage of match-case syntax, it allows clean error handling and modular response logic. The custom serializer mimics the behavior of Django REST Framework, providing a structured way to define and validate data models for Firestore operations.\n\nKey features include seamless CRUD operations with Firestore, Pythonic error handling using structural pattern matching, and a reusable serialization system for cleaner and more maintainable code.',
            github: 'https://github.com/komikodok/integrate-firestore-fastapi',
            image: '/integrate-firestore-fastapi.png'
        },
        {
            id: 4,
            title: 'Symp - AI Medical Consultation',
            description: 'Symp is a health consultation platform powered by AI utilizing RAG (Retrieval-Augmented Generation) technology. Users can receive instant symptom analysis, preliminary medical advice, and soon, document and image-based medical evaluations — all accessible anytime, anywhere.\n\nThis project is built with Nuxt.js for the frontend and API routes, integrated with a Retrieval-Augmented Generation pipeline to enable accurate and context-aware medical responses. The AI model accesses a knowledge base of curated medical documents to generate informed responses.',
            github: 'https://github.com/komikodok/symp-ai',
            image: '/symp-ai.png'
        }

    ]
})