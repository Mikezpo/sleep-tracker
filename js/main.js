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

