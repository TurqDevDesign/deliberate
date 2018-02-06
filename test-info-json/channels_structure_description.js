let a = { // Variable declaration not important, just set to avoid error with js checker
    "channels" : { // Top-level, contains all channels associated with a user
        "test-channel-1" : { // Channel reference name, only used for iteration
            "title" : "Test Channel 1", // Display title of channel
            "description" : "This is some description of the channel in question. Lorem ipsum dolor sit emet.", // description of channel to be displayed in channel profile
            "image" : "../file_path/image.jpg", // Path of image for channel icon (displayed on sidebar)
            "channel-id" : "123456789", // ID of channel, for database reference
            "type" : "1", // Type of channel, 2 types. 1 = Channel owned by user, 2 = Channel on watchlist
            "categories" : { // All categories / sub-channels for specified channel
                "category-1" : { // Category reference name, only used for iteration
                    "title" : "Category 1", // Display title of category
                    "directory-id" : "1", // ID of category channel, for database reference, relative to parent channel.
                    "group-id" : "1" // ID of grouping, relative to parent channel
                }
            }
        }
    }
}
