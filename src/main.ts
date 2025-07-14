import './style.css'
import { setupCounter } from './counter.ts'

// CSSインポートのみを保持し、HTMLは index.html で管理
console.log('Vite + TypeScript with Tailwind CSS loaded!')

// 必要に応じてカウンターを追加
const counterButton = document.createElement('button')
counterButton.id = 'counter'
counterButton.className = 'mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
counterButton.textContent = 'Click me!'
document.querySelector('#app')?.appendChild(counterButton)

setupCounter(counterButton)
