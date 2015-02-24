# ASB Reffing Calculator

[Calculator Page](http://redew.github.io/ASB-Reffing-Calc/)

I'm horrible at math. However, I love Smogon's ASB program. Unfortunately for me, reffing requires a LOT of math, which I am bad at. So, I set out to work on a reffing calculator to make reffing loads easier on me and other referees. I couldn't have done this without the help of sirDonovan, akela, and many others.

Everything in the calculator should work, but if not, contact me [here](http://www.smogon.com/forums/members/redew.79332/). You can also catch me on [#capasb](http://mibbit.com/#capasb@irc.synirc.net).

# General Calc Info

![bap](https://cloud.githubusercontent.com/assets/6467108/6359501/4f9af166-bc39-11e4-8553-22eebf980cd4.png)

This is the **Base Attack Power** for each move. Enter in the base power for the move and it will be added in the calculations.

![stab](https://cloud.githubusercontent.com/assets/6467108/6359557/b666d932-bc39-11e4-8f7c-55cae71aff1d.png)

Click this button if the move the Pokemon is using is the same type as it. This adds 3 to the calculations.

![crit](https://cloud.githubusercontent.com/assets/6467108/6359578/d91e75ca-bc39-11e4-8174-130fb190b863.png)

This allows you to enter in a crit stage. Certain items, abilities, moves, and arena effects boost the likelihood of critical hits by "stages." The default is stage 0 (1 / 16 chance), then stage 1 (1 / 8 chance), then stage 2 (1 / 2), then finally stage 3 (1 / 1 chance). 

![atkdefrank](https://cloud.githubusercontent.com/assets/6467108/6359653/484463e2-bc3a-11e4-8f64-793eb7b19246.png)

**Attack Rank**: This is the base rank of the attacking Pokemon. *Only enter in the rank.* The calculator will multiply it by 1.5 or 1, depending on the rank.

**Defense Rank**: This is the base rank of the defending Pokemon. *Only enter in the rank.* The calculator will multiply it by 1.5 or 1, depending on the rank.

![abilitem](https://cloud.githubusercontent.com/assets/6467108/6359469/168d67be-bc39-11e4-8350-565f658bd91a.png)

**Ability Effect**: This will add or subtract whatever number is attached to an ability increase or decrease. Select Add or Sub, then enter in the number to do what you picked.

**Field Effect**: This will add or subtract whatever number is attached to a field increase or decrease. Select Add or Sub, then enter in the number to do what you picked.

![item1](https://cloud.githubusercontent.com/assets/6467108/6359805/325bd9c4-bc3b-11e4-924f-5e5d56b36fdf.png)

Item Effect One either adds to or subtracts from the **Base Attack Power of the Pokemon only**. i.e. Expert Belt.

![item2](https://cloud.githubusercontent.com/assets/6467108/6359808/349a2df8-bc3b-11e4-882a-5986e0f0175a.png)

Item Effect Two either adds to or subtracts from the **move's damage only**. i.e. Charcoal.

![burneff](https://cloud.githubusercontent.com/assets/6467108/6359934/f6509086-bc3b-11e4-85c3-8d3f792f651c.png)

The Burn Effect checkbox subtracts 3 from the calc or adds 0 if left unmarked. 

![typeeff](https://cloud.githubusercontent.com/assets/6467108/6359955/1aed137e-bc3c-11e4-8d36-fd56764c3a0c.png)

The Type Effectiveness chart determines how effective the move you are using is on the defending Pokemon. This automatically does the calculations for you, so all you need to do is tell it how effective the move is. If you need to use this to determine a 0x effectiveness, you should probably pay better attention in school.

![atkdefboosts](https://cloud.githubusercontent.com/assets/6467108/6360001/74a366c0-bc3c-11e4-90b2-6d8940fd7a13.png)

**Attack Stage Boost/Decrease and Defense Stage Boost/Decrease**: These two are subtracted from each other (Attack - Defense), then multiplied by two. If there is a negative attack decrease when there is a crit, the negative Attack decrease is ignored. Likewise with a positive Defense boost in the opposing Pokemon. 
