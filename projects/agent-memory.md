# AgentMemory - ReAct LLM Agent Framework

## Overview
Built a ReAct-loop AI agent framework with multi-provider LLM support, automatic tool-call parsing, and error recovery; exposed via a FastAPI REST API with runtime provider switching.

## Stack
- Python
- FastAPI
- ChromaDB
- OpenAI
- Anthropic
- Groq
- DeepSeek
- OpenRouter

## Key Engineering Decisions
- Multi-provider LLM support with runtime switching
- Self-correcting planning and reflection loops
- Vector database integration (ChromaDB) for long-term semantic memory and RAG over conversation history
