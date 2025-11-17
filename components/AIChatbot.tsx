import React, { useState } from 'react';

const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-6 right-6 z-50 font-poppins">
            {/* Chat Window */}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                 <div className="bg-white w-80 h-[28rem] rounded-2xl shadow-xl flex flex-col origin-bottom-right">
                    {/* Header */}
                    <div className="bg-emerald-green text-white p-3 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-bold text-lg">AI Assistant</h3>
                        <button onClick={toggleChat} className="text-white text-2xl leading-none font-bold hover:text-gray-300">&times;</button>
                    </div>
                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-soft-beige">
                         <div className="flex">
                            <div className="bg-white p-3 rounded-lg self-start max-w-xs break-words shadow-sm">
                                <p className="text-sm text-charcoal">Assalamualaikum! How can I assist you today? Feel free to ask about our courses, fees, or teachers.</p>
                            </div>
                         </div>
                    </div>
                    {/* Input */}
                    <div className="p-3 border-t flex items-center bg-white rounded-b-2xl">
                        <input type="text" placeholder="Type your message..." className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-green text-sm" />
                        <button className="ml-2 bg-emerald-green text-white rounded-full p-2 flex-shrink-0 hover:bg-turquoise-glow">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Chat Icon Button */}
            <button 
                onClick={toggleChat} 
                className="bg-emerald-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 mt-4 ml-auto"
                aria-label="Open AI Chat"
            >
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            </button>
        </div>
    );
};

export default AIChatbot;