document.getElementById('startButton').addEventListener('click', function() {
    let music = document.getElementById('backgroundMusic');
    music.play();

    let poemContainer = document.getElementById('poem');
    poemContainer.classList.remove('hidden');

    let poemText = `
At school, I was about to walk inside,
Felt like someone is watching me from side.

It was him jumbled,
I nodded and smiled.

It was the first memory that will forever last,
Just after the eye contact my heart started beating fast.

We fulfilled a promise, made before the date,
To walk together inside the entry gate.

He disappeared after the check,
I ran upstairs without taking a break.

He stood so close, just inches away,
I said "Hi" initiated convo in that way.

Further I asked how's your preparation?
He shrugged, a lil shy in the conversation.

We searched the room, he knew the way,
His school, his past, my new day.

He came again and asked me to go,  
My feet chose yes but my fear said no.

We walked and talked, a little shy,
Still, I tried to make time fly.

In between the talk, I took a stand,
Asked him to pass me his hand.

I held it tight for a little while,
Then we let go with a silent smile.

I still don't know, after this happened,
Why did he wash his hand?

I was shy and insisted "let's go back to our class",
He was chilled and said, stay & let time pass.

He paused, then asked before we’d part, 
"Hum tumko kaise lage?” made racing my heart.

"Achhe,” I smiled, too shy to say more,
And then we head towards our door.

My exam got over,
In just one hour.

I saw him outside,
A guy with soft siren eyes.

We made eye contact, a smile on his face,
I blushed really hard, my heart felt the race.

I still remember his that face,
2 years but my mind will never erase.

The exam got over, students walked out,
I waited for him, looked all about.

And then I finally spotted him,
Eyes locked and world went dim.

He asked what I have written in the test?
I said, "At home, we will share the rest."

Then I sighed, "We have to go,"
With puppy eyes, I told him so.

He told me to not wait and go ahead,
Leaving him my heart was afraid.

I turned around, once, then twice,
Caught his glance, it felt so nice.

Bikes outside, you passed, looked back.  
Your grin said, “This is our track.” 

Then we reached home, the day was about to wrap,
"The best day ever" I put this on status on WhatsApp.

That night, we chatted and relived the day,
To meet him again and everyday my heart prays.

The day I met my soulmate not in dream,
Indeed the best day ever: March 13❤️
    `;

    let index = 0;
    let speed = 50; // Typing speed in milliseconds

    function typeWriter() {
        if (index < poemText.length) {
            poemContainer.innerHTML += poemText.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
    this.style.display = "none"; // Hide the button after clicking
});
