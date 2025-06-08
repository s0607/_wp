def most_common(nums):
    count_dict = {} 
    
    for num in nums:
        count_dict[num] = count_dict.get(num, 0) + 1  
    
    max_count = max(count_dict.values()) 
    most_frequent = [num for num, count in count_dict.items() if count == max_count]  

    return most_frequent[0] if len(most_frequent) == 1 else most_frequent
