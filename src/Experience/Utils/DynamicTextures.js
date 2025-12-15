import * as THREE from 'three'

export default class DynamicTextures {
    constructor() {
        this.textures = {}
    }

    createTextTexture(text, options = {}) {
        const {
            width = 2048,
            height = 1024,
            fontSize = 60,
            fontFamily = 'Arial, sans-serif',
            textColor = '#ffffff',
            backgroundColor = '#667eea',
            gradient = true,
            padding = 80,
            lineHeight = 1.4
        } = options

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')

        if (gradient) {
            const grd = ctx.createLinearGradient(0, 0, width, height)
            grd.addColorStop(0, backgroundColor)
            grd.addColorStop(1, this.adjustColor(backgroundColor, -30))
            ctx.fillStyle = grd
        } else {
            ctx.fillStyle = backgroundColor
        }
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = textColor
        ctx.font = `${fontSize}px ${fontFamily}`
        ctx.textBaseline = 'top'

        const lines = this.wrapText(ctx, text, width - padding * 2, fontSize, lineHeight)
        let y = padding

        lines.forEach(line => {
            ctx.fillText(line.text, padding, y)
            y += line.height
        })

        const texture = new THREE.CanvasTexture(canvas)
        texture.needsUpdate = true
        return texture
    }

    createAboutScreen() {
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 1024
        const ctx = canvas.getContext('2d')

        const grd = ctx.createLinearGradient(0, 0, 2048, 1024)
        grd.addColorStop(0, '#667eea')
        grd.addColorStop(1, '#764ba2')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 2048, 1024)

        ctx.fillStyle = '#ffffff'

        ctx.font = 'bold 90px Arial'
        ctx.fillText('JAGADISH REDDY', 80, 100)

        ctx.font = '48px Arial'
        ctx.fillText('Generative AI / Machine Learning Engineer', 80, 220)

        ctx.font = '36px Arial'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.fillText('📍 Bengaluru, India', 80, 290)

        ctx.font = '40px Arial'
        ctx.fillStyle = '#ffffff'
        const bioText = 'Generative AI & ML Engineer with 7+ years of experience specializing in LLM applications, multi-agent systems, and production MLOps on AWS.'
        this.wrapAndDrawText(ctx, bioText, 80, 380, 1888, 50)

        ctx.font = '36px Arial'
        ctx.fillText('✉ jagadish.reddy1611@gmail.com', 80, 750)
        ctx.fillText('📱 +91 8247701537', 80, 820)
        ctx.fillText('🌐 jagadishreddy.in', 80, 890)

        const texture = new THREE.CanvasTexture(canvas)
        texture.needsUpdate = true
        return texture
    }

    createSkillsScreen() {
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 1024
        const ctx = canvas.getContext('2d')

        const grd = ctx.createLinearGradient(0, 0, 2048, 1024)
        grd.addColorStop(0, '#f093fb')
        grd.addColorStop(1, '#f5576c')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 2048, 1024)

        ctx.fillStyle = '#ffffff'

        ctx.font = 'bold 90px Arial'
        ctx.fillText('SKILLS & EXPERTISE', 80, 80)

        ctx.font = 'bold 50px Arial'
        ctx.fillText('Core GenAI Capabilities', 80, 220)

        ctx.font = '36px Arial'
        ctx.fillText('LLM Dev: LangChain • AutoGen • CrewAI • OpenAI GPT • Claude', 80, 300)
        ctx.fillText('Agents: Multi-agent systems • Tool routing • State mgmt', 80, 360)
        ctx.fillText('RAG: FAISS • Pinecone • Retrieval pipelines • Guardrails', 80, 420)
        ctx.fillText('MLOps: MLflow • Ray • BentoML • AWS SageMaker', 80, 480)

        ctx.font = 'bold 50px Arial'
        ctx.fillText('Technical Stack', 80, 580)

        ctx.font = '36px Arial'
        ctx.fillText('Languages: Python • PySpark • SQL • Scala', 80, 660)
        ctx.fillText('ML/AI: TensorFlow • PyTorch • Scikit-learn', 80, 720)
        ctx.fillText('Cloud: AWS • Docker • Kubernetes • CI/CD', 80, 780)
        ctx.fillText('Data: Spark • Kafka • Airflow • pandas', 80, 840)

        const texture = new THREE.CanvasTexture(canvas)
        texture.needsUpdate = true
        return texture
    }

    createExperienceScreen() {
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 1024
        const ctx = canvas.getContext('2d')

        const grd = ctx.createLinearGradient(0, 0, 2048, 1024)
        grd.addColorStop(0, '#4facfe')
        grd.addColorStop(1, '#00f2fe')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 2048, 1024)

        ctx.fillStyle = '#ffffff'

        ctx.font = 'bold 90px Arial'
        ctx.fillText('EXPERIENCE', 80, 80)

        let y = 220

        ctx.font = 'bold 48px Arial'
        ctx.fillText('Blend360 (Franklin Templeton)', 80, y)
        ctx.font = '36px Arial'
        ctx.fillText('Generative AI Engineer – Dec 2024 - Present', 80, y + 60)
        ctx.font = '32px Arial'
        ctx.fillText('• Multi-agent framework for vSIM strategy generation', 80, y + 120)
        ctx.fillText('• Time-series LLM benchmarking & evaluation', 80, y + 165)

        y += 280

        ctx.font = 'bold 48px Arial'
        ctx.fillText('IBS Software (Expedia)', 80, y)
        ctx.font = '36px Arial'
        ctx.fillText('Lead ML Engineer – Sept 2022 - Dec 2024', 80, y + 60)
        ctx.font = '32px Arial'
        ctx.fillText('• ML pipelines for search relevance using GBDT', 80, y + 120)
        ctx.fillText('• GenAI recommendations via Amazon Bedrock', 80, y + 165)

        y += 280

        ctx.font = 'bold 48px Arial'
        ctx.fillText('Infosys', 80, y)
        ctx.font = '36px Arial'
        ctx.fillText('Technology Analyst – Jul 2018 - Aug 2022', 80, y + 60)
        ctx.font = '32px Arial'
        ctx.fillText('• Credit risk models • OCR engine • Predictive maintenance', 80, y + 120)

        const texture = new THREE.CanvasTexture(canvas)
        texture.needsUpdate = true
        return texture
    }

    createProjectScreen(projectNumber) {
        const projects = [
            {
                title: 'Multi-Agent vSIM',
                desc: 'Framework for Virtual Systematic Investment Management with automated strategy generation',
                tech: 'LangChain • AutoGen • AWS'
            },
            {
                title: 'Time-Series LLM Benchmarking',
                desc: 'Evaluation harness for Chronos, TimeGPT and baseline forecasting models',
                tech: 'Python • MLflow • Ray'
            },
            {
                title: 'GenAI Content Recommendations',
                desc: 'Personalized lodging recommendations using LLMs for Expedia',
                tech: 'Claude • Titan • Bedrock'
            },
            {
                title: 'IRN Generation System',
                desc: 'Investment Research Notes app with LLM-as-Judge evaluation',
                tech: 'LangChain • GPT • Claude'
            },
            {
                title: 'Search Relevance Pipeline',
                desc: 'ML pipeline for hotel search ranking and room-type mapping',
                tech: 'GBDT • AWS • Kubernetes'
            },
            {
                title: 'NLP Sentiment Analysis',
                desc: 'Customer sentiment analysis for CX dashboards',
                tech: 'BERT • VADER • AWS'
            },
            {
                title: 'OCR Engine',
                desc: 'CNN-LSTM system reducing manual processing by 80 hrs/day',
                tech: 'TensorFlow • CNN • LSTM'
            },
            {
                title: 'Predictive Maintenance',
                desc: 'LSTM-based system for heavy machinery downtime reduction',
                tech: 'PyTorch • LSTM • IoT'
            }
        ]

        const project = projects[projectNumber - 1]
        if (!project) return this.createTextTexture('Project ' + projectNumber)

        const canvas = document.createElement('canvas')
        canvas.width = 1024
        canvas.height = 1024
        const ctx = canvas.getContext('2d')

        const grd = ctx.createLinearGradient(0, 0, 1024, 1024)
        grd.addColorStop(0, '#a18cd1')
        grd.addColorStop(1, '#fbc2eb')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 1024, 1024)

        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
        ctx.fillRect(40, 40, 944, 944)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 60px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('PROJECT ' + projectNumber, 512, 120)

        ctx.font = 'bold 54px Arial'
        this.wrapAndDrawText(ctx, project.title, 80, 220, 864, 60, 'center')

        ctx.font = '38px Arial'
        this.wrapAndDrawText(ctx, project.desc, 80, 450, 864, 50, 'center')

        ctx.font = 'bold 36px Arial'
        ctx.fillText('Tech Stack:', 512, 750)
        ctx.font = '34px Arial'
        this.wrapAndDrawText(ctx, project.tech, 80, 810, 864, 46, 'center')

        const texture = new THREE.CanvasTexture(canvas)
        texture.needsUpdate = true
        return texture
    }

    wrapAndDrawText(ctx, text, x, y, maxWidth, lineHeight, align = 'left') {
        const words = text.split(' ')
        let line = ''
        let currentY = y
        const originalAlign = ctx.textAlign
        ctx.textAlign = align
        const centerX = align === 'center' ? x + maxWidth / 2 : x

        words.forEach((word, index) => {
            const testLine = line + word + ' '
            const metrics = ctx.measureText(testLine)
            const testWidth = metrics.width

            if (testWidth > maxWidth && index > 0) {
                ctx.fillText(line, centerX, currentY)
                line = word + ' '
                currentY += lineHeight
            } else {
                line = testLine
            }
        })
        ctx.fillText(line, centerX, currentY)
        ctx.textAlign = originalAlign
        return currentY + lineHeight
    }

    wrapText(ctx, text, maxWidth, fontSize, lineHeight) {
        const words = text.split(' ')
        const lines = []
        let currentLine = ''

        words.forEach(word => {
            const testLine = currentLine + word + ' '
            const metrics = ctx.measureText(testLine)

            if (metrics.width > maxWidth && currentLine !== '') {
                lines.push({
                    text: currentLine.trim(),
                    height: fontSize * lineHeight
                })
                currentLine = word + ' '
            } else {
                currentLine = testLine
            }
        })

        if (currentLine !== '') {
            lines.push({
                text: currentLine.trim(),
                height: fontSize * lineHeight
            })
        }

        return lines
    }

    adjustColor(color, amount) {
        const hex = color.replace('#', '')
        const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount))
        const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount))
        const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount))
        return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
    }
}
