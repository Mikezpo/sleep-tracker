// USER ACTUAL HOURS

const getSleepHours = day => {

    if ( day === 'monday' || day === 'tuesday' ||day === 'wednesday' || day === 'thursday' || day === 'friday') {
      return 7;
    } else if (day === 'saturday' || day === 'sunday') {
      return 7.5;
    }
  };
  
