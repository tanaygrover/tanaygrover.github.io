export const nav = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
]

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Claire Adler Luxury PR',
    location: 'Remote',
    period: 'Sep 2025 – Dec 2025',
    highlights: [
      'Reduced manual research 90% by building an end-to-end automation platform (React, Node.js, PostgreSQL) with scalable REST APIs.',
      'Improved summarization accuracy to 92% and extraction reliability to 97% by developing privacy-aware Python LLM pipelines (Hugging Face, ChatGPT) with prompt optimization and structured evaluation benchmarks.',
      'Increased deployment velocity 87% and achieved 99.2% uptime by containerizing microservices (Docker, AWS EC2/Lambda/S3) with CI/CD, automated tests, and observability.',
      'Reduced production issues 35% by implementing telemetry, structured logging, and automated regression validation across distributed service communication flows.',
    ],
    tags: ['Python', 'LLMs', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    role: 'AI/ML Engineer',
    company: 'Command Hospital, Ministry of Defence',
    location: 'India',
    period: 'Jun 2023 – Dec 2023',
    highlights: [
      'Improved image preprocessing performance 30% by engineering reproducible Python pipelines with validation checks and automated data quality controls.',
      'Achieved 82% classification accuracy by training CNN models (PyTorch/TensorFlow) with hyperparameter optimization and supervised fine-tuning.',
      'Reduced iteration cycles 25% by designing structured model evaluation workflows with measurable regression tracking.',
      'Improved interpretability by visualizing Grad-CAM outputs and documenting reproducible ML validation pipelines.',
    ],
    tags: ['PyTorch', 'TensorFlow', 'OpenCV', 'CNN', 'Grad-CAM', 'Python'],
  },
]

export const projects = [
  {
    title: 'RAG-Powered Multi-Agent Debate Systems',
    desc: 'Architected a modular RAG system (LangGraph, vector DBs) for agentic reasoning — improved semantic retrieval 15%, ensured 100% evaluation consistency across 40K+ samples with human-in-the-loop validation, and reduced evaluation latency 30% via distributed multi-agent orchestration.',
    tags: ['LangGraph', 'RAG', 'LangChain', 'Vector DBs', 'Python'],
    href: 'https://github.com/tanaygrover/Multi_Agent_LLM_Debater',
    metric: '15% retrieval boost',
  },
  {
    title: 'Pose Synthesis with Cross-Modal Diffusion',
    desc: 'Developed a CLIP-guided vision-language diffusion model with cross-attention for 3D pose generation from text. Designed cluster-aware sampling on HumanML3D and reduced anatomical loss by 14+ orders of magnitude through multi-phase optimization.',
    tags: ['PyTorch', 'CLIP', 'Diffusion', 'Cross-Attention', 'HumanML3D'],
    href: 'https://github.com/tanaygrover/CLIP-Conditioned-Diffusion-T2Pose-Generation',
    metric: '14+ orders loss reduction',
  },
  {
    title: 'Emotion Classification → Adaptive Music',
    desc: 'Achieved 94.25% multimodal accuracy by training Wav2Vec, Whisper, and CNN pipelines with large-scale evaluation workflows. Reduced preprocessing errors 30% and validated outputs using valence-arousal benchmarks for personalized music generation.',
    tags: ['Wav2Vec', 'Whisper', 'CNN', 'Multimodal', 'Python'],
    href: 'https://github.com/tanaygrover/emotion_music_gen',
    metric: '94.25% accuracy',
  },
  {
    title: 'Portfolio Manager',
    desc: 'Java-based portfolio management system with Alpha Vantage real-time data, CLI/GUI interfaces, moving averages, crossover detection, cost-basis calculation, and historical value analysis.',
    tags: ['Java', 'Alpha Vantage', 'GUI', 'Algorithms'],
    href: 'https://github.com/tanaygrover/portfolio_manager',
    metric: 'Real-time data',
  },
]

export const publications = [
  {
    title: 'Deep Learning for Crime Pattern Recognition',
    venue: 'IEEE',
    period: 'Jan – May 2023',
    href: 'https://ieeexplore.ieee.org/document/10420190',
    highlights: [
      'Implemented XGBoost, CatBoost, TabNet, hybrid 1D CNN on Chicago, Boston & SF crime datasets.',
      'XGBoost achieved 96.51% accuracy on Chicago dataset.',
      'Bagging classifier achieved highest accuracy of 20.80% on Boston dataset.',
    ],
    tags: ['XGBoost', 'CatBoost', 'TabNet', '1D CNN'],
  },
  {
    title: 'Detection of Intoxication in Automobile Drivers',
    venue: 'IEEE',
    period: 'Jul – Nov 2022',
    href: 'https://ieeexplore.ieee.org/document/10085153',
    highlights: [
      'CNN-based system to detect intoxication through ocular cues for real-time applicability.',
      'Evaluated VGG16, VGG19, MobileNet V2, ResNet50, and LSTM+Attention architectures.',
      'VGG16 achieved highest validation accuracy of 86.72%.',
    ],
    tags: ['VGG16', 'ResNet50', 'LSTM', 'CNN'],
  },
]

// Each category maps to one spoke on the combined radar.
// level drives both the radar shape and the legend bar.
export const skillCategories = [
  {
    id: 'ml-ai',
    label: 'ML & AI',
    color: '#8b5e2e',
    level: 93,
    items: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 88 },
      { name: 'Keras', level: 82 },
      { name: 'Hugging Face', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'LangGraph', level: 82 },
      { name: 'Machine Learning', level: 93 },
      { name: 'NLP', level: 88 },
      { name: 'LLMs', level: 87 },
      { name: 'RAG', level: 85 },
      { name: 'Semantic Search', level: 80 },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    color: '#6b3f1a',
    level: 85,
    items: [
      { name: 'Python', level: 95 },
      { name: 'C/C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 78 },
      { name: 'TypeScript', level: 72 },
      { name: 'SQL', level: 74 },
    ],
  },
  {
    id: 'data-search',
    label: 'Data & Search',
    color: '#a07040',
    level: 82,
    items: [
      { name: 'NumPy', level: 92 },
      { name: 'Pandas', level: 90 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Plotly', level: 78 },
      { name: 'OpenCV', level: 82 },
      { name: 'MySQL', level: 74 },
      { name: 'PostgreSQL', level: 76 },
      { name: 'Jupyter', level: 90 },
      { name: 'Google Colab', level: 88 },
    ],
  },
  {
    id: 'backend-cloud',
    label: 'Backend & Cloud',
    color: '#4a2810',
    level: 78,
    items: [
      { name: 'Docker', level: 82 },
      { name: 'AWS (EC2, S3)', level: 78 },
      { name: 'GCP Vertex AI', level: 72 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Apache Kafka', level: 62 },
      { name: 'CI/CD', level: 82 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 82 },
      { name: 'Node.js', level: 78 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#b8864a',
    level: 74,
    items: [
      { name: 'React', level: 82 },
      { name: 'Vite', level: 78 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'TypeScript', level: 72 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#7a4f25',
    level: 84,
    items: [
      { name: 'Git', level: 92 },
      { name: 'Linux', level: 84 },
      { name: 'Jupyter', level: 90 },
      { name: 'GitHub Actions', level: 82 },
      { name: 'ChatGPT', level: 88 },
      { name: 'Co-Pilot', level: 85 },
      { name: 'Algorithms & DS', level: 82 },
    ],
  },
]

export const education = [
  {
    degree: 'Master of Science in Artificial Intelligence',
    school: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Jan 2024 – May 2026',
    gpa: '3.67 / 4.0',
    highlights: [
      'Specialization in deep learning, large language models, and agentic AI systems.',
      'Coursework: Machine Learning, Deep Learning, Human-Computer Interaction, Foundation of AI, AI Ethics.',
      'Built production ML systems across LLM pipelines, multimodal diffusion models, and multi-agent RAG frameworks.',
    ],
    logo: '🎓',
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    school: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: 'Jun 2019 – May 2023',
    gpa: '3.70 / 4.0',
    highlights: [
      'Strong foundation in computer science fundamentals, algorithms, and software engineering.',
      'Published two IEEE research papers on deep learning for crime pattern recognition and driver intoxication detection.',
      'Graduated with distinction.',
    ],
    logo: '🏛️',
  },
]