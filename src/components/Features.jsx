import SyntaxHighlighter from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'



const features = [
  {
    title: 'AI-Powered Code Suggestions',
    description: 'Leverage advanced AI algorithms to receive intelligent code completions and suggestions that enhance your coding efficiency.',
    codeSnippet: `function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  // AI suggests the following line:
  const response = await api.submitData(data);
}`,
    codePosition: 'left',
  },
  {
    title: 'Seamless IDE Integration',
    description: 'Easily integrate Dimensional Code AI into your favorite IDEs and code editors for a smooth development experience.',
    codeSnippet: `// Install in VS Code
import { DimensionalCodeAI } from '@dimensional/vscode';

const extension = new DimensionalCodeAI({
  apiKey: process.env.DIMENSIONAL_API_KEY,
  autoComplete: true,
  suggestions: 'smart'
});`,
    codePosition: 'right',
  },
  {
    title: 'Customizable Workflows',
    description: 'Tailor the AI assistance to fit your unique development workflows and project requirements.',
    codeSnippet: `// Configure AI workflow
const workflow = {
  codeStyle: 'functional',
  framework: 'react',
  testFramework: 'jest',
  autoFormat: true,
  suggestions: ['imports', 'types', 'tests']
};

DimensionalCode.configure(workflow);`,
    codePosition: 'left',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span>Features</span>
            <br />
            <span className="text-gray-400">And Benefits</span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.codePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              {/* code section */}
              <div className='flex-1 w-full'>
                <div className='relative group'>
                  <div className='absolute inset-0 bg-gradient-to-br from-black to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500' />
                  <div className='relative bg-gray-950/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-gray-400/50 transition-all duration-300'>
                    {/* IDE Interface */}
                    <div className='bg-gray-950 rounded-lg p-3 sm:p-3 font-mono text-xs sm:text-sm'>
                      <div className='flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4'>
                        <div className='flex items-center space-x-1 sm:space-x-2'>
                          <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500' />
                          <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500' />
                          <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500' />
                        </div>
                        <span className="text-gray-300 ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
                      </div>
                      <div>
                        <SyntaxHighlighter language='javascript' style={materialDark} customStyle={{ margin: 0, background: 'transparent', borderRadius: '8px', fontSize: '0.75rem', lineHeight: '1.4', height: '100%' }}>
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* text section */}
              <div className='flex-1 w-full'>
                <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                  <h3 className='text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white'>{feature.title}</h3>
                  <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features