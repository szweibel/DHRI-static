
export default function FrontPage(currentFile, allFiles) {
  const excerpt = currentFile.excerpt
  const title = currentFile.title
  const cover_image = currentFile.cover_image
  const dependencies = currentFile.dependencies
  const workshops = allFiles.workshops
  const installGuides = allFiles.guides
  const insights = allFiles.insights

  if (dependencies === undefined) {
    return (
      <div className="frontpage">
          <h1>{title}</h1>
        {excerpt && <div className="excerpt">
          <p>{excerpt}</p>
        </div>}
      </div>
    )
  }
  const formattedDependencies = Object.keys(dependencies).map(key => {
    const items = dependencies[key]
    const addLinktoItems = Object.keys(items).map(key => {
      const item = items[key]
      // check if item is in workshops or insights or installGuides
      const workshop = workshops.find(workshop => workshop.slug === key)
      const insight = insights.find(insight => insight.slug === key)
      const guide = installGuides.find(guide => guide.slug === key)
      const which = workshop ? workshop : ((insight ? insight : (guide ? guide : null)))
      const allItems = {
        [key]: {
          title: which.title,
          excerpt: item,
          link: which ? `/${which.itemPath}` : '#'
        }
      }
      return {
        title: which.title,
        allItems
      }
    })
    return {
      title: key,
      items: addLinktoItems
    }
  })

  const formedDeps = formattedDependencies.map(dep => {
    return (
      <div className="dependency" key={dep.title}>
        <h2>{dep.title}</h2>
        <ul>
          {dep.items.map(item => {
            return (
              <li key={item.title}>
                <a href={item.allItems[Object.keys(item.allItems)[0]].link}>{item.allItems[Object.keys(item.allItems)[0]].title}</a>
                <p>{item.allItems[Object.keys(item.allItems)[0]].excerpt}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  })

  // all objects in currentFile
  const allObjects = Object.keys(currentFile).map(key => {
    const item = currentFile[key]
    // if object name is 'dependencies' or 'workshops' or 'insights' or 'installations' or 'excerpt' or 'title' or 'cover_image', don't add to list
    if (key === 'dependencies' || key === 'workshops' || key === 'insights' || key === 'installations' || key === 'excerpt' || key === 'title' || key === 'cover_image' || key === 'content' || key === 'slug'
    || key === 'path' || key === 'itemPath') {
      return null
    }
    return {
      title: key,
      items: item
    }
  })
  
  const formattedObjects = allObjects.map(obj => {
    if (obj === null) {
      return null
    }
    return (
      <div className="object"  key={obj.title}> 
        <h2>{obj.title}</h2>
        <ul>
          {obj.items && Object.keys(obj.items).map(key => {
            const item = obj.items[key]
            // if there's a description, show it
            if (key === 'description') {
              return (
                <li key={key}>
                  <p>{item}</p>
                </li>
              )
            }
            
            return (
              <li key={key}>
                <a href={item.link}>{key}</a>
                <p>{item.excerpt}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  })
  return (
    <div className="frontpage">
        <h1>{title}</h1>
      {excerpt && <div className="excerpt">
        <p>{excerpt}</p>
      {formedDeps}
      {formattedObjects}
        </div>}
    </div>
    )
}

