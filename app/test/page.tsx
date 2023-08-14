'use client'
import React from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem, AccordionPanel,
    Box,
    FormControl,
    FormLabel,
    Switch
} from "@chakra-ui/react";
import Test from "./Test";

export default function Home() {
    return (
        <div>
            <Test/>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    Enable email alerts?
                </FormLabel>
                <Switch id='email-alerts'/>
            </FormControl>
            <Switch size={"md"}/>
            <Accordion allowMultiple={true}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        这是一个AccordionPanel
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 2 title
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    {({isExpanded}) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Section 2 title
                                    </Box>
                                    {isExpanded ? (
                                        <div>-</div>
                                    ) : (
                                        <div>+</div>
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </div>
    );
}