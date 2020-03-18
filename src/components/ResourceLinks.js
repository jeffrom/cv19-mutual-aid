const keyFromName = (name) => {
  return name.toLowerCase().replace(/ +/g, '-')
}

const ResourceListItem = ({name, href}) => (
  <li>
    <a href={href}>{name}</a>
  </li>
)

const ResourceLinkList = ({category, links}) => (
  <ul>
    {links.map(({name, href}) => (
      <ResourceListItem key={keyFromName(name)} name={name} href={href} />
    ))}
  </ul>
)

export const ResourceLinks = ({links}) => {
  const categories = Object.keys(links)
  categories.sort()

  return categories.map((category) => (
    <>
      <h3>{category.replace(/[-_]/g, ' ')}</h3>
      <ResourceLinkList category={category} links={links[category]} />
    </>
  ))
}
