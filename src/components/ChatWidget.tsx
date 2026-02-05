'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Definindo o tipo da mensagem manualmente
type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
    };
    
    // Atualiza estado e limpa input
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // 2. Faz a requisição manual
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage], // Envia histórico + nova msg
        }),
      });

      if (!response.ok) throw new Error('Erro na requisição');
      if (!response.body) throw new Error('Sem corpo de resposta');

      // 3. Prepara para receber a resposta do bot
      const botMessageId = (Date.now() + 1).toString();
      const botMessagePlaceholder: Message = {
        id: botMessageId,
        role: 'assistant',
        content: '', // Começa vázio e vai enchendo
      };

      setMessages(prev => [...prev, botMessagePlaceholder]);

      // 4. Lê o stream de dados
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let streamedResponse = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });
        streamedResponse += chunkValue;

        // Atualiza a mensagem do bot no estado em tempo real
        setMessages(prev => 
          prev.map(msg => 
            msg.id === botMessageId 
              ? { ...msg, content: streamedResponse } 
              : msg
          )
        );
      }

    } catch (error) {
      console.error('Erro ao enviar:', error);
      // Opcional: Adicionar mensagem de erro visível
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl  border border-red-800/30 flex flex-col overflow-hidden"
          > 
            {/* Cabeçalho */}
            <div className="bg-red-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold font-display uppercase tracking-wider text-sm">Centauro Assistente</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
                title="Fechar chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Área de Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 text-sm mt-8 space-y-2">
                  <p>Olá! 👋</p>
                  <p>Sou o assistente virtual da Centauro.</p>
                  <p>Como posso ajudar você hoje?</p>
                </div>
              )}
              
              {messages.map(m => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-gray-200 text-gray-700' : 'bg-red-700 text-white'}`}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-black text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-md border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {m.role === 'user' ? (
                      m.content
                    ) : (
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          strong: ({node, ...props}) => <span className="font-bold" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                          li: ({node, ...props}) => <li className="mb-1" {...props} />,
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-2">
                   <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0">
                      <Bot size={16} />
                   </div>
                   <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                      <Loader2 size={16} className="animate-spin text-gray-400" />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Área de Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua dúvida..."
                  className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:bg-white transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-black transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão de Abrir/Fechar */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-red-700 hover:bg-black text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}