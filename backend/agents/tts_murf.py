"""Simple Murf TTS integration stub.

Provides a placeholder `generate_tts_with_murf` that will be replaced
with a real Murf API integration later.
"""
import os
from typing import Optional


def generate_tts_with_murf(coaching_text: str, persona: Optional[dict] = None) -> str:
    """Generate TTS audio for coaching text using Murf (stub).

    This is a placeholder implementation that reads `MURF_API_KEY` from
    the environment (but does not require it) and returns a dummy audio
    URL. Replace this with a real Murf API integration when available.

    Args:
        coaching_text: Text to synthesize.
        persona: Optional persona metadata (ignored for now).

    Returns:
        str: URL to the generated audio file.
    """
    murf_key = os.getenv("MURF_API_KEY")
    # Logically we would use murf_key to authenticate — for now we ignore it.
    _ = murf_key

    # Return a stable dummy MP3 URL for development and testing.
    return "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
