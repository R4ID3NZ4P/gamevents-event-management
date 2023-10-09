const FAQ = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">FAQ</h1>
            <div className="join join-vertical w-full mb-10">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What do I need to bring to a LAN party hosted by your website?
                </div>
                <div className="collapse-content">
                    <p>Answer: LAN parties are all about enjoying games with friends! When attending one of our LAN parties, we recommend you bring the following:
                        Your gaming rig (computer or console).
                        Monitor, keyboard, mouse, and any other peripherals you prefer.
                        Power strips and extension cords.
                        A comfortable chair if you have one.
                        Snacks and drinks (some events may have food vendors too).
                        Your ticket or registration confirmation (digital or printed).
                        Don't forget to check the specific event details for any additional requirements or recommendations.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    Are your gaming events suitable for all skill levels?
                </div>
                <div className="collapse-content">
                    <p>Answer: Absolutely! We cater to gamers of all skill levels, from beginners to seasoned pros. Our events are designed to be inclusive, offering a variety of activities and competitions to suit everyone's gaming interests. Whether you're looking for casual fun, competitive challenges, or educational workshops, you'll find something for you at our gaming events. Plus, our community is friendly and welcoming, so don't hesitate to join us, no matter your skill level!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    What safety measures are in place for in-person gaming events?
                </div>
                <div className="collapse-content">
                    <p>Answer: Your safety is our priority! We implement several safety measures at our in-person gaming events to ensure a secure and enjoyable experience:
                        Health Screenings: We may conduct health screenings, including temperature checks, to ensure attendees are feeling well.
                        Sanitization: High-touch areas and equipment are regularly sanitized during the event.
                        Security: Trained security personnel are on-site to handle any potential issues and ensure a safe environment.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FAQ;
