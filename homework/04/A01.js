function countLetters(str)
{
    const result = new Map();
    for (const char of str) 
    {
        const lowerChar = char.toLowerCase();
        if (lowerChar >= 'a' && lowerChar <= 'z') 
        {
            result.set(lowerChar, (result.get(lowerChar) || 0) + 1);
        }
    }
    return result;
}
