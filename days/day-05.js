// Día 5 - Advent JS

/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const elfDates = [fromTime, takeOffTime]
  const timestamps = []

  // Parse the elf date to UTC date (miliseconds)
  elfDates.forEach(elfDate => {
    // Remove the suffix
    elfDate = elfDate.replace(" NP", "")
    
    // Split the date and time
    const [ date, time ] = elfDate.split("@")
    const [ year, month, day ] = date.split("*")
    const [ hours, minutes, seconds ] = time.split("|")

    // Obtain the miliseconds (UTC)
    const miliseconds = Date.UTC(year, month - 1, day, hours, minutes, seconds)
    timestamps.push(miliseconds)
  })

  // Calculate the difference between the timestamps (ms)
  const [ fromTimeMs, takeOffTimeMs ] = timestamps;
  const timeDifferenceMs = takeOffTimeMs - fromTimeMs;

  // Parse to seconds
  const timeDifferenceSeconds = Math.floor(timeDifferenceMs / 1000)
  return timeDifferenceSeconds
}

//* Tests
const takeoff = '2025*12*25@00|00|00 NP'
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))