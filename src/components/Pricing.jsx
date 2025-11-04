import { Check, ArrowRight } from 'lucide-react'


const plans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'Basic features for personal use',
    features: [
      '10GB Storage',
      'Basic Support',
      'Single User',
      'Email Support',
      'API Access', 
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'Advanced features for growing teams',
    features: [
      '100GB Storage',
      'Priority Support',
      'Up to 10 Users',
      '24/7 Live Chat',
      'Advanced API Access',
      'Custom Integrations',
      'Analytics Dashboard',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'Complete solution for large organizations',
    features: [
      'Unlimited Storage',
      'Dedicated Support',
      'Unlimited Users',
      'Phone & Email Support',
      'Full API Access',
      'Custom Workflows',
      'Advanced Analytics',
      'SLA Guarantee',
      'On-Premise Deployment',
    ],
    mostPopular: false,
  },
]

const Pricing = () => {
  return (
    <section id="Pricing" className="py-16 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span>Simple, Transparent</span>
            <br />
            <span className="text-gray-400">Pricing</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Choose the perfect plan for your needs. All plans include a 14-day free trial.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, key) => (
            <div key={key} className="relative overflow-visible">
              {plan.mostPopular && (
                <div className="absolute -top-3 sm:-top-4 lg:-top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-black to-gray-500 rounded-full text-xs font-semibold shadow-lg">
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <div className={`relative bg-gray-700/20 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-hidden group flex flex-col h-full ${
                plan.mostPopular ? 'ring-2 ring-gray-500 shadow-2xl shadow-gray-500/20 lg:scale-105' : 'border-slate-800 hover:border-slate-700'}`}>
                <div className='absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl'/>
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                  </div>
                </div>
                <ul className='space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow'>
                {plan.features.map((feature, fKey) => (
                  <li key={fKey} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-500/20 flex items-center justify-center mt-0.5 ">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400"/>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
                </ul>
                <div className="mt-auto flex justify-center">
                  <button className='group px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-b from-gray-600 to-gray-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2'>
                    <span>Get Started</span>
                    <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-8 sm:mt-12 text-center'>
          <p className='text-gray-400 text-xl'>Need a custom plan? <a href='#' className="text-blue-500">Contact us</a></p>
        </div>
      </div>
    </section>
  )
}

export default Pricing