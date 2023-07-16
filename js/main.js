// USER ACTUAL HOURS

const getSleepHours = day => {

    if ( day === 'monday' || day === 'tuesday' ||day === 'wednesday' || day === 'thursday' || day === 'friday') {
      return 7;
    } else if (day === 'saturday' || day === 'sunday') {
      return 7.5;
    }
  };
  
//  THE IDEAL HOURS
  
const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

// CALCULATE THE HOURS

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    if(actualSleepHours === idealSleepHours) {
      return `You've got the perfect amount of sleep!`;
    }else if(actualSleepHours > idealSleepHours) {
      return `You've got more sleep then needed by ${actualSleepHours - idealSleepHours} hours.`;
    }else if (actualSleepHours < idealSleepHours) {
      return `You've got less sleep then needed by ${idealSleepHours - actualSleepHours} hours.`
    }
  };