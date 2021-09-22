//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distanceFromTown, hasNeighbours)
{
    let cm = {adr : address , dist : distanceFromTown, nbh : hasNeighbours}
    return typeof cm.adr + typeof cm.dist + typeof cm.nbh;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents,noOfSiblings,isNuclearFamily)
{
  let mak = {pr : parents , nos : noOfSiblings, inr : isNuclearFamily}
  if ( typeof mak.pr === typeof "" && typeof mak.nos === 'number' && typeof mak.inr === 'boolean')
  return true
  else
  return false
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber)
{

    if (ageInText === 'NaN'  ||  ageInNumber === 'NaN')
    {
    return  ageInText;
    }
    if (isNaN(ageInText) || isNaN(ageInNumber) )
    return NaN    
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel)
{
if (isNaN(totalNoOfSweets) || isNaN(sweetsConsumedByKaren) || isNaN(sweetsConsumedInNMeters) || isNaN(metersToTravel))
return "No sweets are left that Karen's friend can have";
if (totalNoOfSweets === 0 && sweetsConsumedByKaren === 0 &&  sweetsConsumedInNMeters === 0 && metersToTravel === 0)
return totalNoOfSweets;
if (sweetsConsumedInNMeters < metersToTravel)
return 0
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelsius(fahrenheit)
{
    if (typeof fahrenheit  === 'undefined' || typeof fahrenheit  === 'string' || typeof fahrenheit  === 'object')
    return 'Improper Input for Temperature'
    else
    return (5/9*(fahrenheit-32))
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

function aDifficultChoice(choice)
{
    if (choice === 1)
        return "Choice made to take her daughter to a doctor";
    else if(choice === 2)

        return "Choice made to talk to her husband about it";
    
    else if(choice === 3)
    
        return "Choice made to counsel her daughter by herself";
    
    else if(choice === 4)
    
        return "Choice made to lock her daughter in her room";
    
    else if (choice === 0 )

        return  'Lily had a mental breakdown and gave up hope';

    else if (typeof choice === 'undefined')
    
        return "Lily Wasn't able to decide anything on her own";
    else
        return 'Lily made the Choice to refuse to do anything for her child Karen';
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies)
{
    var sv="";
    for (const i of strategies) {
        sv+=" "+i;
    }
    return sv.length;
}




