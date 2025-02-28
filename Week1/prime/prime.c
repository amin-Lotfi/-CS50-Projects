#include <cs50.h>
#include <math.h>
#include <stdio.h>

bool prime(int number);

int main(void)
{
    int min;
    int max;

    do
    {
        min = get_int("Minimum: ");
    }
    while (min < 1);

    do
    {
        max = get_int("Maximum: ");
    }
    while (min >= max);

    for (int i = min; i <= max; i++)
    {
        if (prime(i))
        {
            printf("%i\n", i);
        }
    }
}

bool prime(int number)
{
    for (int i = 2; i <= sqrt(number); i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }
    
    return true;
}
