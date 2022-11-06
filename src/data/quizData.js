export const data = {
    quizzes: [
        {
            id: 0,
            name: "C# Beginner Quiz 1", description: "A C# Beginner quiz",
            questions: [
                {
                    name: "What is the correct way to overload the addition operator for the class Recipe in C#",
                    choices: [
                        { choice: "public static Recipe Plus (Recipe a, Recipe b)" },
                        { choice: "public static Recipe operator+ (Recipe a, Recipe b)" },
                        { choice: "public static Recipe Override + (Recipe a, Recipe b)" },
                        { choice: "public static Recipe + (Recipe a, Recipe b)" }
                    ],
                    answer: 1
                },
                {
                    name: "What statement do you use to exit out of a for loop during iteration",
                    choices: [
                        { choice: "break;" },
                        { choice: "exit;" },
                        { choice: "continue;" },
                        { choice: "end;" }
                    ],
                    answer: 0
                },
                {
                    name: "Do something",
                    choices: [
                        { choice: "break;" },
                        { choice: "exit;" },
                        { choice: "continue;" },
                        { choice: "end;" }
                    ],
                    answer: 0
                }
            ]
        },
    ]
};