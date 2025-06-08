function uniqueSorted(arr)
{
    return Array.from(new Set(arr)).sort((a, b) => a - b);
}

