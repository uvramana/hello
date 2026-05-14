def get_factors(n):
    """
    Get all factors of a given number.
    
    Args:
        n (int): The number to find factors for
        
    Returns:
        list: A list of all factors of n in ascending order
        
    Raises:
        ValueError: If n is not a positive integer
    """
    if not isinstance(n, int) or n <= 0:
        raise ValueError("Input must be a positive integer")
    
    factors = []
    
    # Find all factors up to the square root
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            factors.append(i)
            # Add the complementary factor if it's different
            if i != n // i:
                factors.append(n // i)
    
    # Sort factors in ascending order
    factors.sort()
    return factors


if __name__ == "__main__":
    # Example usage
    test_numbers = [12, 28, 100, 17, 1]
    
    for num in test_numbers:
        factors = get_factors(num)
        print(f"Factors of {num}: {factors}")
