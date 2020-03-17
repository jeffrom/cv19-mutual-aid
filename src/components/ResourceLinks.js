
const ResourceListItem = ({name, href}) => (
  <li>
    <a href={href}>{name}</a>
  </li>
)

const ResourceLinkList = ({category, links}) => (
  <ul>
    {links.map(({key, name, href}) => (
      <ResourceListItem key={key} name={name} href={href} />
    ))}
  </ul>
)

export const ResourceLinks = ({links}) => {
  const categories = Object.keys(links)
  categories.sort()

  return categories.map((category) => (
    <>
      <h3>{category}</h3>
      <ResourceLinkList category={category} links={links[category]} />
    </>
  ))
}
