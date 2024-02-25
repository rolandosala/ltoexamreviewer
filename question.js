const questions = [
    {
        question: 'Identify the sign:',
        image: '40maxspeed.png',
        options: ['Speed Limit, maximum of speed of 40 kph', 'Speed Limit, minimum of speed of 40 kph', 'No entry', 'No Entry'],
        answer: 'Traffic Light Ahead'
    },
    {
        question: 'Identify the sign:',
        image: 'animalscrossing.png',
        options: ['A piece of document that shows a person is legible to drive', 'Cameron', 'Lemon', 'Grapes'],
        answer: 'Grapes'
    },
    {
        question: 'Identify the sign:',
        image: 'approachtointersection.png',
        options: ['Squash', 'Cameron', 'Lemon', 'Grapes'],
        answer: 'Squash'
    },
    {
        question: 'Identify the sign:',
        image: 'bikelane.png',
        options: ['Red', 'Green', 'Blue', 'Yellow'],
        answer: 'Green'
    },
    {
        question: 'Identify the sign:',
        image: 'breakdownstation.png',
        options: ['Pig', 'Horse', 'Dragon', 'Carabao'],
        answer: 'Dragon'
    },
    {
        question: 'Identify the sign:',
        image: 'busstopzonenoparkingallowed.png',
        options: ['Tiger', 'Cat', 'Bird', 'Monkey'],
        answer: 'Cat'
    },
    {
        question: 'Identify the sign:',
        image: 'busterminal.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'dangerfromfallingrocks.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'dangerouscruve.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'doubleleftsharpturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'doublerightsharpturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'exceed5tons.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'exceed10meterslength.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'firstaidstation.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'fuelfilingstation.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'hospital.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'hotelormotel.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'intersectionmergingtraffic.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'intersectionsideroad.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'leftsharpturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noblowingofhorn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentry.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryforalltypesofvehicles.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryforanimaldrawnvehicle.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryforbicycles.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryforbuses.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryforcars.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryforjeepneys.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryfortricycles.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noentryfortricycles.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noleftturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'noparking.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'norightturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'nostoppinganytime.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'nouturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'openingbridgeahead.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'pedestriancrossingahead.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'railroadcrossing.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'refreshmentsorcafeteria.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'restaurant.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'rightsharpturn.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'roadintersection.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'roadworks.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'roundaboutahead.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'slipperroad.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'slipperyroad.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'slowdown.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'steepascent.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'steepdescent.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'stopsign.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'telephonebooth.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'trafficlight.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'twowaytraffic.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },
    {
        question: 'Identify the sign:',
        image: 'unevenroad.png',
        options: ['Duck', 'Egg', 'Gasoline', 'Nails'],
        answer: 'Gasoline'
    },


];

