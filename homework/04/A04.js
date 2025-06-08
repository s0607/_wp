function deepMerge(obj1, obj2)
{
    for (const key in obj2) 
    {
        if (obj2.hasOwnProperty(key)) 
        {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) 
            {
                if (!obj1[key] || typeof obj1[key] !== 'object') 
                {
                    obj1[key] = {};
                }
                deepMerge(obj1[key], obj2[key]);
            } else 
            {
                obj1[key] = obj2[key];
            }
        }
    }
    return obj1;
}