
const questions = [
    {
        question: "1. You arrive at a gathering or party where you don’t know many people. How do you handle it?",
        choices: [
            { text: "I jump into conversations, introduce myself, and enjoy the energy of people.",
               INTRO: 0, EXTRO: 1, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I join the crowd, engage in group activities, and enjoy the lively atmosphere.", 
               INTRO: 0, EXTRO: 1, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I observe the room first and find a smaller group or familiar face to chat with", 
               INTRO: 1, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I look for one or two people to talk to, for deeper one-on-one conversations.",
               INTRO: 1, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
        ]
    },
    {
        question: "2. You have a free weekend with no plans. How do you prefer to spend it?",
        choices: [
            { text: "I reach out to friends, go out, or find an event to attend, I get energy from social activities.",
               INTRO: 0, EXTRO: 1, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0},
            { text: " I spend time with one or two close friends or family members in a relaxed setting.", 
               INTRO: 1, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I have a laid-back hangout, like grabbing coffee with friends or watching a movie together.",
               INTRO: 0, EXTRO: 1, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0},
            { text: " I enjoy solo activities like doing my hobbies or working on a personal project, I recharge best alone.",
             INTRO: 1, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            
        ]
    },
    {
        question: "3. You start a new class or job. How do you approach meeting people?",
        choices: [
            { text: "I engage naturally, chatting with those around me while keeping things relaxed and casual.",
               INTRO: 0, EXTRO: 1, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I introduce myself quickly, start conversations, and enjoy getting to know many people right away.",
               INTRO: 0, EXTRO: 1, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I observe first then gradually connect with a few people for deep talks.", 
               INTRO: 1, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },
            { text: "I focus on forming a few meaningful connections rather than meeting many people at once.", 
               INTRO: 1, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  },    
        ]
    },
    {
        question: "4.  You discover a hidden café while exploring a new city. How do you react?",
        choices: [
            { text: " I wonder about its story - why it’s hidden, who visits, and what it represents in a bigger picture.", 
               INTRO: 0, EXTRO: 0, INTUITION: 1, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I focus on the details - the menu, the aroma of coffee, the decor, and the overall atmosphere.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 1, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I focus on the practical side, checking reviews, looking at the menu, and deciding if it’s worth trying.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 1, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
             { text: " I imagine its potential how it could grow, what unique experiences it might offer, or what it reminds me of.", 
               INTRO: 0, EXTRO: 0, INTUITION: 1, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
        ]
    },
    {
        question: "5. You’re given a new gadget to try out. How do you approach it?",
        choices: [
            { text: "I test its basic functions first, focusing on how practical and useful it is.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 1, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: " I think about its purpose, potential uses, and how this gadget could improve things in future", 
               INTRO: 0, EXTRO: 0, INTUITION: 1, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I read the manual or follow step-by-step instructions to understand how it works.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 1, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I explore it freely, experimenting with different features to see what it can do.", 
               INTRO: 0, EXTRO: 0, INTUITION: 1, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
        ]
    },
    {
        question: "6. When telling a story, what do you focus on?",
        choices: [
            { text: "I focus on accuracy, keeping the story clear, structured, and true to what actually happened.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 1, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I emphasize creativity, adding personal insights, symbolism, or imagining different possibilities.", 
               INTRO: 0, EXTRO: 0, INTUITION: 1, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "The bigger meaning and connections between things.", 
               INTRO: 0, EXTRO: 0, INTUITION: 1, SENSING: 0, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "The details, what happened, how it looked, and who was there. ",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 1, THINK: 0 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
          
        ]
    },
    {
        question: "7. A friend asks for advice on a tough decision. How do you respond?",
        choices: [
            { text: "I offer support and encouragement, prioritizing their well-being and how they feel about the choice.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
            { text: " I give direct, objective advice, focusing on what makes the most sense in the long run.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I analyze the situation logically, offer solutions, and help them see the best course of action.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 1 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I listen with empathy, offer emotional support, focus on how they’re feeling and what would make them happiest.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
        ]
    },
    {
        question: "8. You’re in a group debate, and someone disagrees with you. What’s your reaction?",
        choices: [
            { text: "I consider how my response might affect the group’s harmony and adjust my approach to keep things positive.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "Stick to the facts and explain your reasoning clearly.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 1 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I try to understand their viewpoint, making sure the conversation stays respectful and open-minded.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "defend my points logically, focusing on facts and reasoning.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 1 , FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
        ]
    },
    {
        question: "9. You have to make a difficult decision. What guides you more?",
        choices: [
            { text: "I think about how my choice will impact others and prioritize maintaining good relationships.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I focus on logic, facts, and objective analysis to determine the choice to make.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 1, FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I consider emotions, values, and how my decision will affect others.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 1, JUDGE: 0, PERCEIVE: 0  
            },
            { text: "I consider the long-term consequences and choose what makes the most sense.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 1, FEEL: 0, JUDGE: 0, PERCEIVE: 0  
            },
        ]
    },
    {
        question: "10. How do you approach making plans in different situations?",
        choices: [
            
            { text: "I prefer going with the flow, seeing where the day takes me without strict plans.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 0, PERCEIVE: 1 
            },
            { text: "I like structuring my day with a set schedule or to-do list to stay productive and focused.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 1, PERCEIVE: 0  
            },
            { text: "I enjoy being spontaneous with close friends, deciding plans as we go based on what feels fun.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 0, PERCEIVE: 1 
            },
            { text: "I prefer having a clear plan when meeting new people to avoid uncertainty and keep things organized.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 1, PERCEIVE: 0  
            }, 
        ]
    },
    {
        question: "11. How do you handle unexpected changes in different situations?",
        choices: [
            { text: " I try to stick to the original plan and find a structured way to adjust if needed.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 1, PERCEIVE: 0  
            },
            { text: "I embrace the change and go with whatever feels best for everyone in the moment.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 0, PERCEIVE: 1  
            },
            { text: "I prefer to reorganize quickly and create a new plan to stay on track.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 1, PERCEIVE: 0
            },
            { text: "I see it as an opportunity for something new and let things unfold naturally.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 0, PERCEIVE: 1 
            },
        ]
    },
    {
        question: "12. How do you handle decision-making in different situations?",
        choices: [
            { text: "I like to keep things open-ended, adjusting plans based on what feels right in the moment.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 0, PERCEIVE: 1 
            },
            { text: "I prefer to make a firm decision quickly to keep things organized and avoid confusion.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 1, PERCEIVE: 0  
            },
            { text: "I go with whatever feels best at the time, leaving room for spontaneity.",
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 0, PERCEIVE: 1 
            },
            { text: "I think through my options carefully and decide based on a clear plan or goal.", 
               INTRO: 0, EXTRO: 0, INTUITION: 0, SENSING: 0, THINK: 0, FEEL: 0, JUDGE: 1, PERCEIVE: 0  
            },
          
        ]
    }
];
const tasks = [
     { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 2, T_SENSING: 0, T_THINK: 2, T_FEEL: 0, T_JUDGE: 2, T_PERCEIVE: 0, result: "INTJ" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 2, T_SENSING: 0, T_THINK: 2, T_FEEL: 0, T_JUDGE: 0, T_PERCEIVE: 2, result: "INTP" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 2, T_SENSING: 0, T_THINK: 0, T_FEEL: 2, T_JUDGE: 2, T_PERCEIVE: 0, result: "INFJ" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 2, T_SENSING: 0, T_THINK: 0, T_FEEL: 2, T_JUDGE: 0, T_PERCEIVE: 2, result: "INFP" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 0, T_SENSING: 2, T_THINK: 2, T_FEEL: 0, T_JUDGE: 2, T_PERCEIVE: 0, result: "ISTJ" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 0, T_SENSING: 2, T_THINK: 2, T_FEEL: 0, T_JUDGE: 0, T_PERCEIVE: 2, result: "ISTP" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 0, T_SENSING: 2, T_THINK: 0, T_FEEL: 2, T_JUDGE: 2, T_PERCEIVE: 0, result: "ISFJ" },
    { T_INTRO: 2, T_EXTRO: 0, T_INTUITION: 0, T_SENSING: 2, T_THINK: 0, T_FEEL: 2, T_JUDGE: 0, T_PERCEIVE: 2, result: "ISFP" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 2, T_SENSING: 0, T_THINK: 2, T_FEEL: 0, T_JUDGE: 2, T_PERCEIVE: 0, result: "ENTJ" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 2, T_SENSING: 0, T_THINK: 2, T_FEEL: 0, T_JUDGE: 0, T_PERCEIVE: 2, result: "ENTP" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 2, T_SENSING: 0, T_THINK: 0, T_FEEL: 2, T_JUDGE: 2, T_PERCEIVE: 0, result: "ENFJ" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 2, T_SENSING: 0, T_THINK: 0, T_FEEL: 2, T_JUDGE: 0, T_PERCEIVE: 2, result: "ENFP" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 0, T_SENSING: 2, T_THINK: 2, T_FEEL: 0, T_JUDGE: 2, T_PERCEIVE: 0, result: "ESTJ" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 0, T_SENSING: 2, T_THINK: 2, T_FEEL: 0, T_JUDGE: 0, T_PERCEIVE: 2, result: "ESTP" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 0, T_SENSING: 2, T_THINK: 0, T_FEEL: 2, T_JUDGE: 2, T_PERCEIVE: 0, result: "ESFJ" },
    { T_INTRO: 0, T_EXTRO: 2, T_INTUITION: 0, T_SENSING: 2, T_THINK: 0, T_FEEL: 2, T_JUDGE: 0, T_PERCEIVE: 2, result: "ESFP" },
];

const imageMap = {
"INTJ": "The animals/Owl.png",
"INTP": "The animals/Octopus.png",
"ENTJ": "The animals/Lion.png",
"ENTP": "The animals/Fox.png",
"INFJ": "The animals/Wolf.png",
"INFP": "The animals/deer.png",
"ENFJ": "The animals/dolphin.png",
"ENFP": "The animals/parrot.png",
"ISTJ": "The animals/BEAVER.png",
"ISTP": "The animals/panther.png",
"ESTJ": "The animals/Eagle.png",
"ESTP": "The animals/Shark.png",
"ISFJ": "The animals/elephant.png",
"ISFP": "The animals/cat.png",
"ESFJ": "The animals/dog.png",
"ESFP": "The animals/Peacock.png",


}

let total_INTRO_Points = 0;
let total_EXTRO_Points = 0;
let total_INTUITION_Points = 0;
let total_SENSING_Points= 0;  
let total_THINK_Points= 0;
let total_FEEL_Points= 0;
let total_JUDGE_Points= 0;
let total_PERCEIVE_Points= 0;
let currentQuestionIndex = 0;




function start() {
  const screenDiv = document.querySelector(".screen")
  // Create and append the start button
  const button = document.createElement("button");
  button.textContent = "Start";
  button.id = "startButton";

  screenDiv.appendChild(button);
  button.style.marginTop = "14em";
  button.style.padding = "1em 5em";
  button.style.fontSize = "25px";
  button.style.marginLeft = "-1.1em";
  

  // Add event listener to start the quiz
  button.addEventListener("click", function () {
      button.style.display = "none"; // Hide the button
      displayQuestion(); // Start the quiz
  });
}

function displayQuestion() {
  const choicesContainer = document.getElementById("choices");
    if (currentQuestionIndex < questions.length) {
        const questionContainer = document.getElementById("question");
        const choicesContainer = document.getElementById("choices");
        
        questionContainer.textContent = questions[currentQuestionIndex].question;
        choicesContainer.innerHTML = "";
        
        questions[currentQuestionIndex].choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = function () {
                total_INTRO_Points += choice.INTRO;
                total_EXTRO_Points += choice.EXTRO;
                total_INTUITION_Points += choice.INTUITION;
                total_SENSING_Points += choice.SENSING;
                total_THINK_Points += choice.THINK;
                total_FEEL_Points += choice.FEEL;
                total_JUDGE_Points += choice.JUDGE;
                total_PERCEIVE_Points += choice.PERCEIVE;
                currentQuestionIndex++;
                displayQuestion();
            };
            choicesContainer.appendChild(button);
        });
    } else {
        let resultText = "Quiz Finished! Your result is: None";
        for (const task of tasks) {
            if (total_INTRO_Points >= task.T_INTRO &&  total_EXTRO_Points >= task.T_EXTRO &&  total_INTUITION_Points >= task.T_INTUITION &&  total_SENSING_Points >= task.T_SENSING &&  total_THINK_Points >= task.T_THINK &&  total_FEEL_Points >= task.T_FEEL &&  total_JUDGE_Points >= task.T_JUDGE &&  total_PERCEIVE_Points >= task.T_PERCEIVE) {
                resultText = `Quiz Finished! Your result is: ${task.result} `;
                resultImage = imageMap[task.result] || "https://example.com/default.jpg";
                break;
            }
        }
        document.getElementById("question").style.display = "none";
        document.getElementById("choices").innerHTML = "";
       const imgElement = document.createElement("img");
          imgElement.src = resultImage;
          imgElement.alt = resultText;
          imgElement.style.width = "380px";
          imgElement.style.height = "472px";
          imgElement.style.marginLeft = "-4em";
          imgElement.style.marginTop = "-1.75em";
          document.querySelector(".screen").style.backgroundColor = "transparent";
          choicesContainer.appendChild(imgElement);
       const DLbutton = document.createElement("button");
          DLbutton.id = "Dlpersonality";
          DLbutton.textContent = "Download Image";
          document.body.appendChild(DLbutton);

            DLbutton.addEventListener("click", async function() {
        const imageUrl = resultImage; // Ensure this is a direct image URL (e.g., "https://example.com/image.png")

       try {
            const response = await fetch(imageUrl, { mode: 'cors' }); // Fetch image
            const blob = await response.blob();

            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "download.png"; // Change filename as needed
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(url); // Clean up
        } catch (error) {
            console.error("Failed to download image:", error);
        }
       
      });
      const linkbutton = document.createElement("button");
       linkbutton.id = "linkbutton";
       linkbutton.textContent = "linkbutton";
       document.body.appendChild(linkbutton);
    }
  
}

document.addEventListener("DOMContentLoaded", start);
