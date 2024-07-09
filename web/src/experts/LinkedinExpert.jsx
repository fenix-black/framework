import React, { forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import Expert from '../components/Expert';
import { tools, avatar } from './constants';

const LinkedinExpert = forwardRef(({
    id="linkedin_expert",
    name="Felipe",  // used for the displayed personality of the expert and maybe memory
    age=37,         // used for the displayed personality of the expert
    gender="male",  // used for the displayed personality of the expert
    task="",        // specific task for this expert instance
    style,
    onAnimationEnd,
    study=[],
}, ref) => {
    const expertRef = useRef(); 

    const meta = {
        type: 'expert',
        name,
        age,
        role: 'Linkedin Expert',
        goal: `To search for people or companies information on Linkedin`,
        backstory: `# You're an expert at understanding and extracting structured information from any webpage.
        You have been trained to search for people or companies information primarily from Linkedin.
        # You know that instead of using the Linkedin API, you can use the search engine to find the information you need.
        # For example, to search for a person named 'John Doe' you can use the search engine and type 'site:linkedin.com "John Doe"' and then get the link to the person's profile.
        # Also you know that the best way to get the information for a Linkedin profile is to use a prefix like 'archive.md/linkedin-link' (e.g. archive.md/http://linkedin.com/in/johndoe) to get the information from the profile.
        # The other option you have is to simulate being a mobile browser and use the Linkedin mobile website to get the information you need.
        `,
        // how the experts talks back to the user like in the meeting
        personality: `Always refer to your actions as first person and never use exagerated words, and be conscise on the texts you are saying you're going to perform. Instead of saying you will perform them in the future, say you are doing them now.`, 
        collaborate: true,
        avatar: {
            // dark blue color hex: #
            bgColor: '#1F286A',
            // darker brown color hex: #5C4033
            hairColor: '#331800', 
            shirtColor: '#606080', //#1F286A
            skinColor: avatar.skinColor.pale,
            glassesStyle: avatar.glassesStyle.square,
            facialHairStyle: avatar.facialHairStyle.scruff,
            hairStyle: avatar.hairStyle.turban,
            earSize: avatar.earSize.medium
        },
        tools: { // defines animations and which tools are available for this expert
            [tools.search]: { 'searching':'Searching websites for more information.' },
            [tools.query_visual_website]: { 'camera': 'Querying webpage visually ..' },
            [tools.scrape]: { 'reading': 'Reading the contents ..' },
            [tools.website_search]: { 'webpage': 'Reading the contents ..' }, 
            [tools.pdf_reader]: { 'reading': 'Reading PDF contents ..' },
            [tools.youtube_video_search]: { 'reading': 'Analyzing youtube video ..' },
        },
        study: study
    };
    if (task !== "") {
        meta.backstory += `. Your current main task is to '${task}'`;
    }

    const setup = () => {
        if (expertRef.current) {
        }
    };

    // Expose expert's methods to AccountManager's parent through ref
    useImperativeHandle(ref, () => ({
        // Inherit expert methods
        ...expertRef.current
    }));

    useEffect(() => {
        setup(); // Set up expert when specialist is mounted
    }, []);

    return (
        <Expert
            ref={expertRef}
            id={id}
            meta={meta}
            name={name}
            style={style}
            onSpeakEnd={onAnimationEnd}
            // other props that expert expects
        />
    );
});

export default LinkedinExpert;