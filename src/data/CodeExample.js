export const codeExample = {
    "App.jsx": `
    import { useState } from 'react';
    import { DimensionalCode } from '@dimensionalcode/ai';
    
    functional App() {
        const [code, setCode] = useState('');

        const handleGenerateCode = async () => {
            const suggestion = await DimensionalCode.complete(code)
            setCode(suggestion);
            }

        return (
            <div className="app">
                <CodeEditor onChange={setCode} onAI={handleGenerateCode} />
            </div>
        );
    }`,

    "Hero.jsx": `
    import { useState } from 'react';
    import { DimensionalCode } from '@dimensionalcode/ai';

    functional Hero() {
        const [code, setCode] = useState('');

        const handleGenerateCode = async () => {
            const suggestion = await DimensionalCode.complete(code)
            setCode(suggestion);
            }

        return (
            <div className="hero">
                <CodeEditor onChange={setCode} onAI={handleGenerateCode} />
            </div>
        );
    }`,

    "Navbar.jsx": `
    import { useState } from 'react';
    import { DimensionalCode } from '@dimensionalcode/ai';

    functional Navbar() {
        const [code, setCode] = useState('');

        const handleGenerateCode = async () => {
            const suggestion = await DimensionalCode.complete(code)
            setCode(suggestion);
            }

        return (
            <div className="navbar">
                <CodeEditor onChange={setCode} onAI={handleGenerateCode} />
            </div>
        );
    }`

}


export const floatingCards = {
    "App.jsx": {
        bgColor: 'bg-gray-500/20',
        iconColor: 'text-gray-400',
        textColor: 'text-gray-300',
        contentColor: 'text-gray-300',
        icon: '⚛️',
        title: 'AI Assistant',
        content: 'AI-powered code completions for faster development.'
    },

    "Hero.jsx": {
        bgColor: 'bg-blue-500/20',
        iconColor: 'text-blue-400',
        textColor: 'text-blue-300',
        contentColor: 'text-gray-300',
        icon: '🚀',
        title: 'Smart Components',
        content: 'Build beautiful UI components with intelligent suggestions.'
    },

    "Navbar.jsx": {
        bgColor: 'bg-purple-500/20',
        iconColor: 'text-purple-400',
        textColor: 'text-purple-300',
        contentColor: 'text-gray-300',
        icon: '⚡',
        title: 'Lightning Fast',
        content: 'Real-time code analysis and instant optimizations.'
    }
}