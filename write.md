# DESCRIPTION
## File Upload Feature:
The file upload feature allows users to select and upload files from their local system to the Multimedia Web App. When the user selects a file using the file input field, the app retrieves the file details such as name, extension, and content. It then determines the file type (audio, video, document, or image) based on the file extension. The uploaded file is then added to the list of files displayed in the app's file container.

## Search Feature:
The search feature enables users to search for specific files within the Multimedia Web App. As the user types in the search input field, the app dynamically filters the displayed files based on the search query. Only the files whose names contain the search query (case-insensitive) are shown, providing a convenient way for users to find specific files among a potentially large collection. The matching search query is highlighted in light-blue, providing visual feedback to the user.

# WHY  THESE FEATURES (FILE UPLOAD AND SEARCH)
I chose the file upload feature and the search feature as additions to the Multimedia Web App because they provide significant benefits to the users and enhance the overall user experience. 

These two features greatly enhance the user experience of the Multimedia Web App. The file upload feature enables users to easily add their own media files to the app, allowing them to organize and manage their multimedia content in one place. This feature eliminates the need for users to manually copy or move files to a specific folder, streamlining the file management process.

Additionally, the search feature saves users' time and effort by allowing them to quickly locate files based on their names. It provides a simple and intuitive way to navigate through a large number of files and find the desired content efficiently. The highlighting of the matching search query improves visibility and helps users identify the relevant files at a glance.

# HOW THE CODE WORKS
In terms of code functionality, the file upload feature uses the HTML file input element to capture the selected file. The file details are then extracted using the FileReader API, and the file type is determined based on its extension using a mapping function. The uploaded file is added to the state variable representing the list of files.

On the other hand, the search feature relies on the `onChange` event of the search input field to capture the user's input and update the `searchQuery` state variable. The file container is then dynamically filtered based on the search query using JavaScript's `filter` method, ensuring that only relevant files are displayed to the user. The light-blue highlighting of the matching search query is achieved by manipulating the CSS styles of the displayed file names.

Overall, these two features provide valuable functionality to the Multimedia Web App, allowing users to easily upload their own files and efficiently search for specific content. These additions improve the app's usability, organization, and searchability, making it a more comprehensive and user-friendly multimedia management solution.
